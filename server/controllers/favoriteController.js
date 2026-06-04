const db = require("../config/db");

// SAVE RECIPE
const addFavorite = (req, res) => {
  const userId = req.user.id;
  const recipeId = req.params.recipeId;

  const query = `
    INSERT INTO favorites
    (user_id, recipe_id)
    VALUES (?, ?)
  `;

  db.query(
    query,
    [userId, recipeId],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        message:
          "Recipe saved successfully",
      });
    }
  );
};

// GET USER FAVORITES
const getFavorites = (req, res) => {
  const userId = req.user.id;

  const query = `
    SELECT
      recipes.*
    FROM favorites

    JOIN recipes
    ON favorites.recipe_id = recipes.id

    WHERE favorites.user_id = ?
  `;

  db.query(
    query,
    [userId],
    (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(200).json(results);
    }
  );
};

module.exports = {
  addFavorite,
  getFavorites,
};