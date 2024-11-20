import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 3,
      max: 12,
    },
    lastName: {
      type: String,
      required: true,
      min: 3,
      max: 12,
    },
    email: {
      type: String,
      required: true,
      min: 3,
      max: 12,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
      max: 12,
    },
    picturePath: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
