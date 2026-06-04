const express = require("express")

const userRoutes = require("./routes/userRoutes");

const categoryRoutes = require("./routes/categoryRoutes")

const favoriteRoutes = require("./routes/favoriteRoutes");

const reviewRoutes = require("./routes/reviewRoutes");

const mealPlanRoutes = require("./routes/mealPlanRoutes");

const uploadRoutes = require("./routes/uploadRoutes");

const path = require("path");

const recipeRoutes = require("./routes/recipeRoutes")

  const cors = require("cors")

require("dotenv").config()

// DATABASE CONNECTION
require("./config/db")

const authRoutes = require("./routes/authRoutes")

const app = express()

// MIDDLEWARE
app.use(cors())

app.use(express.json())
app.use(
  "/uploads",

  express.static(
    path.join(
      __dirname,
      "uploads"
    )
  )
);

// AUTH ROUTES
app.use("/api/auth", authRoutes)
app.use("/api/recipes", recipeRoutes)
app.use("/api/categories", categoryRoutes)
app.use("/api/users", userRoutes);
app.use("/api/favorites",favoriteRoutes);
app.use("/api/reviews",reviewRoutes);
app.use("/api/mealplans",mealPlanRoutes);
app.use("/api/upload",uploadRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.json({
    message: "Backend server running",
  })
})

// PORT
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  )
})