import sharp from "sharp";
import path from "path";

export async function resizeUserPhoto(req, res, next) {
  if (!req.file) return next();

  const newFilename = `user-${Date.now()}.jpeg`;
  try {
    await sharp(req.file.path)
      .resize(500, 500)
      .toFormat("jpeg")
      .jpeg({ quality: 90 })
      .toFile(path.join("public/assets", newFilename));

    req.file.filename = newFilename;
    req.file.path = path.join("public/assets", newFilename);
  } catch (error) {
    return res.status(500).json({ message: "Error resizing image", error });
  }
  next();
}

export async function resizeUploadedPhoto(req, res, next) {
  const newFilename = `user-${Date.now()}.jpeg`;

  try {
    await sharp(req.file.path)
      .resize(600, 400)
      .toFormat("jpeg")
      .jpeg({ quality: 90 })
      .toFile(path.join("public/assets", newFilename));

    req.file.filename = newFilename;
    req.file.path = path.join("public/assets", newFilename);
  } catch {
    return res.status(500).json({ message: "Error resizing image", error });
  }
  next();
}
