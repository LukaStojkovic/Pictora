import express from "express";
import { getMe, getUser } from "../controllers/usersController.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getMe", verifyToken, getMe);
// router.get("/:id", verifyToken, getUser);

export default router;
