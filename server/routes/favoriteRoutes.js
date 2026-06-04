const express = require("express");

const router = express.Router();

const {
  addFavorite,
  getFavorites,
} = require(
  "../controllers/favoriteController"
);

const {
  verifyToken,
} = require(
  "../middleware/authMiddleware"
);

// SAVE RECIPE
router.post(
  "/:recipeId",
  verifyToken,
  addFavorite
);

// GET SAVED RECIPES
router.get(
  "/",
  verifyToken,
  getFavorites
);

module.exports = router;