import User from "../models/User.js";
import bcrypt from "bcrypt";

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

export async function updateUserPassword(req, res) {
  try {
    const { id } = req.params;
    const { newPassword, currentPassword, confirmPassword } = req.body;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    if (confirmPassword !== newPassword) {
      return res.status(400).json({
        status: "fail",
        message: "Confirm password don't match",
      });
    }

    const isCorrect = await bcrypt.compare(currentPassword, user.password);

    if (!isCorrect) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect current password",
      });
    }

    const salt = await bcrypt.genSalt(12);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();
    res.status(200).json({
      status: "success",
      message: "Password updated succesfully",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
}

export async function getUserFriends(req, res) {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, location, picturePath }) => {
        return { _id, firstName, lastName, location, picturePath };
      }
    );

    res.status(200).json({
      status: "success",
      formattedFriends,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
}

export async function addRemoveFriend(req, res) {
  try {
    const { id, friendId } = req.params;

    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }

    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, location, picturePath }) => {
        return { _id, firstName, lastName, location, picturePath };
      }
    );

    res.status(200).json({
      status: "success",
      formattedFriends,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
}
