const express =
  require("express");

const router =
  express.Router();

const {
  getMealPlans,
  getMealPlanById,
  createMealPlan,
  updateMealPlan,
  deleteMealPlan,
} = require(
  "../controllers/mealPlanController"
);

const {
  verifyToken,
  isAdmin,
} = require(
  "../middleware/authMiddleware"
);

// PUBLIC
router.get(
  "/",
  getMealPlans
);

router.get(
  "/:id",
  getMealPlanById
);

router.put(
  "/:id",
  verifyToken,
  isAdmin,
  updateMealPlan
);

router.delete(
  "/:id",
  verifyToken,
  isAdmin,
  deleteMealPlan
);

// ADMIN
router.post(
  "/",
  verifyToken,
  isAdmin,
  createMealPlan
);

module.exports = router;