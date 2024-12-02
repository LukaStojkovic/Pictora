import express from "express";
import {
  getMe,
  getUser,
  updateUser,
  updateUserPassword,
} from "../controllers/usersController.js";
import { verifyToken } from "../middlewares/auth.js";
import multer from "multer";
import { resizeUserPhoto } from "../middlewares/photoResize.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });
router.use(verifyToken);

router.get("/getMe", getMe);
router.get("/:id", getUser);
router.patch("/:id", upload.single("picture"), resizeUserPhoto, updateUser);
router.patch("/:id/password", updateUserPassword);

export default router;
