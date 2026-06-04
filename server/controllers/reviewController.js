const db = require("../config/db");

// CREATE REVIEW
const createReview = (req, res) => {
  const userId = req.user.id;

  const {
    recipe_id,
    rating,
    comment,
  } = req.body;

  const query = `
    INSERT INTO reviews
    (
      user_id,
      recipe_id,
      rating,
      comment
    )
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      userId,
      recipe_id,
      rating,
      comment,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        message:
          "Review submitted successfully",
      });
    }
  );
};

// GET REVIEWS FOR RECIPE
const getRecipeReviews = (
  req,
  res
) => {
  const recipeId =
    req.params.recipeId;

  const query = `
    SELECT
      reviews.*,
      users.name

    FROM reviews

    JOIN users
    ON reviews.user_id = users.id

    WHERE reviews.recipe_id = ?

    ORDER BY reviews.created_at DESC
  `;

  db.query(
    query,
    [recipeId],
    (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(200).json(results);
    }
  );
};

module.exports = {
  createReview,
  getRecipeReviews,
};