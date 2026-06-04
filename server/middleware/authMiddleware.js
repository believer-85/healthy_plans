const jwt = require("jsonwebtoken")

// VERIFY TOKEN MIDDLEWARE
const verifyToken = (req, res, next) => {
  // GET AUTH HEADER
  const authHeader = req.headers.authorization

  // CHECK IF TOKEN EXISTS
  if (!authHeader) {
    return res.status(401).json({
      message: "No token provided",
    })
  }

  // EXTRACT TOKEN
  const token = authHeader.split(" ")[1]

  try {
    // VERIFY TOKEN
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    )

    // SAVE USER DATA TO REQUEST
    req.user = decoded

    // CONTINUE TO NEXT MIDDLEWARE
    next()
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    })
  }
}

// ADMIN AUTHORIZATION MIDDLEWARE
const isAdmin = (req, res, next) => {
  // CHECK USER ROLE
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message:
        "Access denied. Admins only.",
    })
  }

  // CONTINUE
  next()
}

module.exports = {
  verifyToken,
  isAdmin,
}