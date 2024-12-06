import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { register } from "./controllers/authController.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import multer from "multer";
import { verifyToken } from "./middlewares/auth.js";
import { createPost } from "./controllers/postsController.js";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import {
  resizeUploadedPhoto,
  resizeUserPhoto,
} from "./middlewares/photoResize.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://vercel.live"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  })
);

const PORT = process.env.PORT || 8001;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/auth/register", upload.single("picture"), resizeUserPhoto, register);
app.post(
  "/post",
  verifyToken,
  upload.single("picture"),
  resizeUploadedPhoto,
  createPost
);

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/post", postRoutes);
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Connected to Port ${PORT}`));
  })
  .catch((err) => {
    console.log(`${err} failed to Connect!`);
  });
