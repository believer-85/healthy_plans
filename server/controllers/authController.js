const db = require("../config/db")

const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")

// REGISTER USER
const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  // CHECK EMPTY FIELDS
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    })
  }

  try {
    // CHECK IF USER EXISTS
    const checkUserQuery =
      "SELECT * FROM users WHERE email = ?"

    db.query(
      checkUserQuery,
      [email],
      async (err, results) => {
        if (err) {
          return res.status(500).json(err)
        }

        // USER EXISTS
        if (results.length > 0) {
          return res.status(400).json({
            message: "Email already exists",
          })
        }

        // HASH PASSWORD
        const hashedPassword =
          await bcrypt.hash(password, 10)

        // INSERT USER
        const insertQuery =
          "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"

        db.query(
          insertQuery,
          [name, email, hashedPassword],
          (err, result) => {
            if (err) {
              return res.status(500).json(err)
            }

            res.status(201).json({
              message:
                "User registered successfully",
            })
          }
        )
      }
    )
  } catch (error) {
    res.status(500).json(error)
  }
}

// LOGIN USER
const loginUser = (req, res) => {
  const { email, password } = req.body

  // CHECK EMPTY FIELDS
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    })
  }

  // FIND USER
  const query =
    "SELECT * FROM users WHERE email = ?"

  db.query(query, [email], async (err, results) => {
    if (err) {
      return res.status(500).json(err)
    }

    // USER NOT FOUND
    if (results.length === 0) {
      return res.status(400).json({
        message: "Invalid credentials",
      })
    }

    const user = results[0]

    // COMPARE PASSWORD
    const isMatch = await bcrypt.compare(
      password,
      user.password
    )

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      })
    }

    // GENERATE TOKEN
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      }
    )

    res.status(200).json({
      message: "Login successful",

      token,

      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })
  })
}

module.exports = {
  registerUser,
  loginUser,
}