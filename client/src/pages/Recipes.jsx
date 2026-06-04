import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import API_URL from "../config/api";
import LoadingSpinner from "../components/LoadingSpinner";

function Recipes() {
  // RECIPES STATE
  const [recipes, setRecipes] = useState([])

  // LOADING STATE
  const [loading, setLoading] = useState(true)

  // ERROR STATE
  const [error, setError] = useState("")
  // SEARCH STATE
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTime, setSelectedTime] = useState("All")


  // FETCH RECIPES
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response =
          await axios.get(
            `${API_URL}/api/recipes`
          )

        setRecipes(response.data)

        setLoading(false)
      } catch (err) {
        console.log(err)

        setError("Failed to fetch recipes")

        setLoading(false)
      }
    }

    fetchRecipes()
  }, [])

  // LOADING UI
  if (loading) {
  return <LoadingSpinner />
}

  // ERROR UI
  if (error) {
    return (
      <h1 className="text-center mt-20 text-3xl text-red-500 font-bold">
        {error}
      </h1>
    )
  }

  const filteredRecipes = recipes.filter(
  (recipe) => {
    const matchesSearch =
      recipe.title
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        );

    const matchesCategory =
      selectedCategory === "All" ||
      recipe.category_name ===
        selectedCategory;

    const matchesTime =
      selectedTime === "All" ||
      recipe.cooking_time ===
        selectedTime;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesTime
    );
  }
);

const categories = [
  "All",

  ...new Set(
    recipes.map(
      (recipe) => recipe.category_name
    )
  ),
]

const cookingTimes = [
  "All",

  ...new Set(
    recipes.map(
      (recipe) =>
        recipe.cooking_time
    )
  ),
];

const saveRecipe = async (
  recipeId
) => {
  try {
    const token =
      localStorage.getItem("token");

    await axios.post(
      `${API_URL}/api/favorites/${recipeId}`,
      {},

      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

    alert(
      "Recipe saved successfully"
    );
  } catch (err) {
    console.log(err);

    alert(
      "Please login first"
    );
  }
};

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-16">
      {/* PAGE HEADER */}
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Healthy Recipes
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          Discover delicious healthy meals
          for busy professionals.
        </p>
      </div>

      {/* SEARCH & FILTER */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mt-12">
        {/* SEARCH INPUT */}
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
        />

        {/* CATEGORY FILTER */}
        <select
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(e.target.value)
          }
          className="w-full md:w-60 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
        >
          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>

        <select
          value={selectedTime}
          onChange={(e) =>
            setSelectedTime(
              e.target.value
            )
          }
          className="w-full md:w-60 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
        >
          {cookingTimes.map(
            (time) => (
              <option
                key={time}
                value={time}
              >
                {time}
              </option>
            )
          )}
        </select>
      </div>

      {/* RECIPES GRID */}
      <div className="grid md:grid-cols-3 gap-8 mt-14">
        {filteredRecipes.length === 0 && (
          <h2 className="text-2xl text-center col-span-3 text-gray-500">
            No recipes found.
          </h2>
        )}
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition block"
          >
            {/* IMAGE */}
            <img
              src={recipe.image}
              alt={recipe.title}
               onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x400";
                }}
              className="w-full h-56 object-cover"
            />

            {/* CONTENT */}
            <div className="p-6">
              <h2 className="text-2xl font-bold">
                {recipe.title}
              </h2>

              <p className="text-gray-600 mt-3">
                {recipe.description}
              </p>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  saveRecipe(recipe.id);
                }}

                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                ❤️ Save
              </button>
              <br />

              <Link
                to={`/recipes/${recipe.id}`}
              >
                View Details
              </Link>

              {/* FOOTER */}
              <div className="flex justify-between items-center mt-6">
                <span className="text-green-600 font-semibold">
                  {recipe.cooking_time}
                </span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {recipe.category_name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Recipes