import express from "express";
import { getMe, getUser, updateUser } from "../controllers/usersController.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getMe", verifyToken, getMe);
router.get("/:id", verifyToken, getUser);
router.patch("/:id", verifyToken, updateUser);

export default router;
