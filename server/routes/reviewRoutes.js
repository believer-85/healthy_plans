const express =
  require("express");

const router =
  express.Router();

const {
  createReview,
  getRecipeReviews,
} = require(
  "../controllers/reviewController"
);

const {
  verifyToken,
} = require(
  "../middleware/authMiddleware"
);

// CREATE REVIEW
router.post(
  "/",
  verifyToken,
  createReview
);

// GET RECIPE REVIEWS
router.get(
  "/:recipeId",
  getRecipeReviews
);

module.exports = router;