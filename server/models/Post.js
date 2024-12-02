import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    location: String,
    description: {
      type: String,
      maxlength: 500,
    },
    userPicturePath: String,
    picturePath: String,
    likes: {
      type: Map,
      of: Boolean,
      default: {},
    },
    comments: {
      type: [
        {
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
          },
          text: { type: String, required: true, maxlength: 150 },
          firstName: { type: String, required: true },
          lastName: { type: String, required: true },
          userPicturePath: { type: String },
          createdAt: { type: Date, default: Date.now },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
