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

export async function updateUser(req, res) {
  try {
    const { id } = req.params;

    console.log(req.file);

    const user = await User.findByIdAndUpdate(
      id,
      {
        aboutMe: req.body.aboutMe,
        description: req.body.description,
        email: req.body.email,
        firstName: req.body.firstName,
        picturePath: req.file?.filename,
      },
      { runValidators: true, new: true }
    );

    if (!user)
      return res.status(404).json({
        status: "fail",
        message: "User does not exist",
      });

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
}
