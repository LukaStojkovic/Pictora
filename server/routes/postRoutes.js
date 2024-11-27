import express from "express";
import { verifyToken } from "../middlewares/auth.js";
import {
  addComment,
  getFeedPosts,
  getUserPosts,
  likePost,
} from "../controllers/postsController.js";

const router = express.Router();

router.use(verifyToken);

router.get("/", getFeedPosts);
router.get("/:userId", getUserPosts);
router.patch("/:id/like", likePost);
router.post("/:id/comment", addComment);

export default router;
