const db = require("../config/db");

// GET ALL MEAL PLANS
const getMealPlans = (req, res) => {
  const query =
    "SELECT * FROM meal_plans ORDER BY id DESC";

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(results);
  });
};

// GET SINGLE MEAL PLAN
const getMealPlanById = (req, res) => {
  const { id } = req.params;

  const query =
    "SELECT * FROM meal_plans WHERE id = ?";

  db.query(
    query,
    [id],
    (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }

      if (results.length === 0) {
        return res.status(404).json({
          message:
            "Meal plan not found",
        });
      }

      res.status(200).json(results[0]);
    }
  );
};

// CREATE MEAL PLAN
const createMealPlan = (req, res) => {
  const {
    title,
    description,
    price,
    image,
    file_url,
    duration,
    goal,
    content,
  } = req.body;

  const query = `
    INSERT INTO meal_plans
    (
      title,
      description,
      price,
      image,
      file_url,
      duration,
      goal,
      content
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      title,
      description,
      price,
      image,
      file_url,
      duration,
      goal,
      content,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        message:
          "Meal plan created successfully",
      });
    }
  );
};

// UPDATE MEAL PLAN
const updateMealPlan = (req, res) => {
  const { id } = req.params;

  const {
    title,
    description,
    price,
    image,
    file_url,
    duration,
    goal,
    content,
  } = req.body;

  const query = `
    UPDATE meal_plans
    SET
      title = ?,
      description = ?,
      price = ?,
      image = ?,
      file_url = ?,
      duration = ?,
      goal = ?,
      content = ?
    WHERE id = ?
  `;

  db.query(
    query,
    [
      title,
      description,
      price,
      image,
      file_url,
      duration,
      goal,
      content,
      id,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(200).json({
        message:
          "Meal plan updated successfully",
      });
    }
  );
};

// DELETE MEAL PLAN
const deleteMealPlan = (req, res) => {
  const { id } = req.params;

  const query =
    "DELETE FROM meal_plans WHERE id = ?";

  db.query(
    query,
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(200).json({
        message:
          "Meal plan deleted successfully",
      });
    }
  );
};

module.exports = {
  getMealPlans,
  getMealPlanById,
  createMealPlan,
  updateMealPlan,
  deleteMealPlan,
};