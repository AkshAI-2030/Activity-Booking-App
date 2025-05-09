const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Authorization failed" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Auth User:", verified);
    req.user = verified; //adding Logged User to Req header.
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token", error: err.message });
  }
};

module.exports = authMiddleware;
