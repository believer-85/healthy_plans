import { Link } from "react-router-dom"

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-60 w-full object-cover hover:scale-105 transition duration-300"
      />

      <div className="p-5">
        <h3 className="text-2xl font-semibold">
          {recipe.title}
        </h3>

        <p className="mt-3 text-gray-600">
          {recipe.description}
        </p>

        <Link
          to={`/recipes/${recipe.id}`}
          className="inline-block mt-5 text-green-600 font-semibold"
        >
          View Recipe
        </Link>
      </div>
    </div>
  )
}

export default RecipeCard