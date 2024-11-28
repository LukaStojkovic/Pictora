import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Email } from "../util/email.js";

export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      location,
      aboutMe,
      description,
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({
        status: "fail",
        message: "Email already in use!",
      });

    const salt = await bcrypt.genSalt();
    const encryptedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: encryptedPassword,
      location,
      picturePath: req.file?.filename,
      aboutMe,
      description,
    });
    const user = await newUser.save();

    await new Email(newUser).sendWelcome();

    res.status(201).json({
      status: "success",
      user,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user)
      return res
        .status(400)
        .json({ status: "fail", message: "User does not exist!" });
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched)
      return res
        .status(400)
        .json({ status: "fail", message: "Invalid password or email!" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    user.password = undefined;

    res.status(200).json({
      status: "success",
      token,
      user,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
