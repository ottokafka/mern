const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  const token = req.header("token");

  //check if not token
  if (!token) {
    return res.status(401).json({ msg: "no token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, "gateway");
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "token not valid" });
  }
};
