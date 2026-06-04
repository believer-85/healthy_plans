const db = require("../config/db")

// CREATE RECIPE
const createRecipe = (req, res) => {
  const {
  title,
  description,
  ingredients,
  instructions,
  cooking_time,
  category_id,
} = req.body

const image = req.file
  ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
  : "";

  // VALIDATION
  if (
    !title ||
    !description ||
    !ingredients ||
    !instructions
  ) {
    return res.status(400).json({
      message: "Please fill all required fields",
    })
  }

  const query = `
    INSERT INTO recipes
    (
      title,
      description,
      image,
      ingredients,
      instructions,
      cooking_time,
      category_id
    )
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `

  db.query(
    query,
    [
      title,
      description,
      image,
      ingredients,
      instructions,
      cooking_time,
      category_id,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json(err)
      }

      res.status(201).json({
        message: "Recipe created successfully",
      })
    }
  )
}

// GET ALL RECIPES
const getRecipes = (req, res) => {
  const query = `
    SELECT recipes.*, categories.name AS category_name
    FROM recipes
    LEFT JOIN categories
    ON recipes.category_id = categories.id
    ORDER BY recipes.created_at DESC
  `

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json(err)
    }

    res.status(200).json(results)
  })
}

// GET SINGLE RECIPE
const getSingleRecipe = (req, res) => {
  const { id } = req.params

  const query = `
    SELECT recipes.*, categories.name AS category_name
    FROM recipes
    LEFT JOIN categories
    ON recipes.category_id = categories.id
    WHERE recipes.id = ?
  `

  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json(err)
    }

    if (results.length === 0) {
      return res.status(404).json({
        message: "Recipe not found",
      })
    }

    res.status(200).json(results[0])
  })
}

module.exports = {
  createRecipe,
  getRecipes,
  getSingleRecipe,
}