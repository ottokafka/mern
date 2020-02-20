const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  const token = req.header("x-auth-token");

  //check if not token
  if (!token) {
    return res.status(401).json({ msg: "not token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, "gateway");
    req.business = decoded.business;
    next();
  } catch (err) {
    res.status(401).json({ msg: "token not valid" });
  }
};
