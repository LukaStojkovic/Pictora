import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  try {
    let token = req.header("Authorization");
    console.log(token);
    if (!token)
      return res.status(403).json({
        status: "fail",
        message: "Access Denied",
      });

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    req.user = verified;

    next();
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
}
