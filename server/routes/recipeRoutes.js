const express = require("express")
const upload = require("../middleware/upload")
const router = express.Router()
const {
  verifyToken,
  isAdmin,
} = require("../middleware/authMiddleware")

const {
  createRecipe,
  getRecipes,
  getSingleRecipe,
} = require("../controllers/recipeController")

// CREATE RECIPE
router.post(
  "/",
  verifyToken,
  isAdmin,
  upload.single("image"),
  createRecipe
)

// GET ALL RECIPES
router.get("/", getRecipes)

// GET SINGLE RECIPE
router.get("/:id", getSingleRecipe)

module.exports = router