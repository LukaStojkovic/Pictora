import User from "../models/User.js";

export async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      res.status(500).json({ status: "fail", message: "User does not exist" });

    res.status(200).json({
      status: "success",
      user,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
}

export async function getMe(req, res) {
  try {
    const user = await User.findById(req.user.id).select(
      "-password -updatedAt"
    );

    if (!user)
      return res.status(202).json({
        status: "fail",
        message: "User does not exist",
      });

    return res.status(200).json({
      status: "success",
      user,
    });
  } catch (err) {
    res.status(202).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
}
