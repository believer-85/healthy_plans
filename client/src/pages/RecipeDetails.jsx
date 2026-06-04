import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import API_URL from "../config/api";
import LoadingSpinner from "../components/LoadingSpinner";

function RecipeDetails() {
  // GET URL PARAMETER
  const { id } = useParams()

  // RECIPE STATE
  const [recipe, setRecipe] = useState(null)

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState("")

  // REVIEW STATES
  const [reviews, setReviews] = useState([])

  const [rating, setRating] = useState(5)

  const [comment, setComment] = useState("")

  // FETCH REVIEWS
  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/reviews/${id}`
      )

      setReviews(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  // FETCH RECIPE + REVIEWS
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response =
          await axios.get(
            `${API_URL}/api/recipes/${id}`
          )

        setRecipe(response.data)

        setLoading(false)
      } catch (err) {
        console.log(err)

        setError("Failed to fetch recipe")

        setLoading(false)
      }
    }

    fetchRecipe()
    fetchReviews()
  }, [id])

  // SUBMIT REVIEW
  const submitReview = async (e) => {
    e.preventDefault()

    try {
      const token =
        localStorage.getItem("token")

      await axios.post(
        `${API_URL}/api/reviews`,

        {
          recipe_id: id,
          rating,
          comment,
        },

        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      )

      setComment("")
      setRating(5)

      fetchReviews()

      alert("Review submitted successfully")
    } catch (err) {
      console.log(err)

      alert(
        "Please login before submitting a review"
      )
    }
  }

  // LOADING
  if (loading) {
  return <LoadingSpinner />
}

  // ERROR
  if (error) {
    return (
      <h1 className="text-center mt-20 text-red-500 text-3xl">
        {error}
      </h1>
    )
  }

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* IMAGE */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-[450px] object-cover"
        />

        {/* CONTENT */}
        <div className="p-10">

          {/* TITLE */}
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-bold">
              {recipe.title}
            </h1>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
              {recipe.category_name}
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-lg mt-6">
            {recipe.description}
          </p>

          {/* COOKING TIME */}
          <div className="mt-6">
            <span className="font-semibold text-green-600">
              Cooking Time:
            </span>{" "}
            {recipe.cooking_time}
          </div>

          {/* INGREDIENTS */}
          <div className="mt-10">
            <h2 className="text-3xl font-bold">
              Ingredients
            </h2>

            <p className="text-gray-700 mt-4 leading-8">
              {recipe.ingredients}
            </p>
          </div>

          {/* INSTRUCTIONS */}
          <div className="mt-10">
            <h2 className="text-3xl font-bold">
              Instructions
            </h2>

            <p className="text-gray-700 mt-4 leading-8">
              {recipe.instructions}
            </p>
          </div>

          {/* REVIEWS SECTION */}
          <div className="mt-12">

            <h2 className="text-3xl font-bold mb-6">
              Reviews
            </h2>

            {/* REVIEW FORM */}
            <form
              onSubmit={submitReview}
              className="bg-gray-50 p-6 rounded-xl mb-8"
            >

              <select
                value={rating}
                onChange={(e) =>
                  setRating(e.target.value)
                }
                className="border p-3 w-full mb-4 rounded"
              >
                <option value="5">
                  ⭐⭐⭐⭐⭐
                </option>

                <option value="4">
                  ⭐⭐⭐⭐
                </option>

                <option value="3">
                  ⭐⭐⭐
                </option>

                <option value="2">
                  ⭐⭐
                </option>

                <option value="1">
                  ⭐
                </option>
              </select>

              <textarea
                value={comment}
                onChange={(e) =>
                  setComment(
                    e.target.value
                  )
                }
                placeholder="Write your review..."
                className="border p-3 w-full rounded mb-4"
                rows="4"
              />

              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                Submit Review
              </button>

            </form>

            {/* REVIEWS LIST */}

            {reviews.length === 0 ? (
              <p className="text-gray-500">
                No reviews yet.
              </p>
            ) : (
              reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white shadow p-5 rounded-lg mb-4 border"
                >

                  <h3 className="font-bold text-lg">
                    {review.name}
                  </h3>

                  <p className="text-yellow-500 mt-2">
                    {"⭐".repeat(
                      review.rating
                    )}
                  </p>

                  <p className="mt-3 text-gray-700">
                    {review.comment}
                  </p>

                </div>
              ))
            )}

          </div>

        </div>
      </div>
    </section>
  )
}

export default RecipeDetails