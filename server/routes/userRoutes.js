import express from "express";
import { getMe, getUser, updateUser } from "../controllers/usersController.js";
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

router.get("/getMe", verifyToken, getMe);
router.get("/:id", verifyToken, getUser);
router.patch(
  "/:id",
  verifyToken,
  upload.single("picture"),
  resizeUserPhoto,
  updateUser
);

export default router;
