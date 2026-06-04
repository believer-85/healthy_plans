import { useEffect, useState } from "react"
import axios from "axios"
import API_URL from "../config/api";

function AddRecipe() {
  const [categories, setCategories] = useState([])
  const [formData, setFormData] =
  
    useState({
      title: "",
      description: "",
      image: "",
      ingredients: "",
      instructions: "",
      cooking_time: "",
      category_id: "",
    })
    

    useEffect(() => {
        const fetchCategories = async () => {
            try {
            const response =
                await axios.get(
                `${API_URL}/api/categories`
                )

            setCategories(response.data)
            } catch (err) {
            console.log(err)
            }
        }

        fetchCategories()
        }, [])

   

    const handleChange = (e) => {
        const { name, value, files } =
            e.target

        setFormData({
            ...formData,

            [name]: files
            ? files[0]
            : value,
        })
    }

    const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const data = new FormData()

    data.append(
      "title",
      formData.title
    )

    data.append(
      "description",
      formData.description
    )

    data.append(
      "image",
      formData.image
    )

    data.append(
      "ingredients",
      formData.ingredients
    )

    data.append(
      "instructions",
      formData.instructions
    )

    data.append(
      "cooking_time",
      formData.cooking_time
    )

    data.append(
      "category_id",
      formData.category_id
    )
    
    const token =
      localStorage.getItem("token")

    const response =
      await axios.post(
        `${API_URL}/api/recipes`,
        data,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

    alert(response.data.message)

    // RESET FORM
    setFormData({
      title: "",
      description: "",
      image: "",
      ingredients: "",
      instructions: "",
      cooking_time: "",
      category_id: "",
    })
  } catch (err) {
    console.log(err)

    alert("Failed to create recipe")
  }
}

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
            {/* TITLE */}
            <h1 className="text-4xl font-bold text-center">
            Add New Recipe
            </h1>

            {/* FORM */}
            <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
            >
            {/* TITLE */}
            <div>
                <label className="block mb-2 font-semibold">
                Recipe Title
                </label>

                <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter recipe title"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
                required
                />
            </div>

            {/* DESCRIPTION */}
            <div>
                <label className="block mb-2 font-semibold">
                Description
                </label>

                <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter recipe description"
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
                required
                ></textarea>
            </div>

            {/* IMAGE */}
            <div>
                <label className="block mb-2 font-semibold">
                    Recipe Image
                </label>

                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
                    required
                />
            </div>

            {/* INGREDIENTS */}
            <div>
                <label className="block mb-2 font-semibold">
                Ingredients
                </label>

                <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                placeholder="Enter ingredients"
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
                required
                ></textarea>
            </div>

            {/* INSTRUCTIONS */}
            <div>
                <label className="block mb-2 font-semibold">
                Instructions
                </label>

                <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                placeholder="Enter cooking instructions"
                rows="6"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
                required
                ></textarea>
            </div>

            {/* COOKING TIME */}
            <div>
                <label className="block mb-2 font-semibold">
                Cooking Time
                </label>

                <input
                type="text"
                name="cooking_time"
                value={formData.cooking_time}
                onChange={handleChange}
                placeholder="Example: 20 mins"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
                />
            </div>

            {/* CATEGORY */}
            <div>
            <label className="block mb-2 font-semibold">
                Category
            </label>

            <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
                required
            >
                <option value="">
                Select Category
                </option>

                {categories.map((category) => (
                <option
                    key={category.id}
                    value={category.id}
                >
                    {category.name}
                </option>
                ))}
            </select>
            </div>
            {/* BUTTON */}
            <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold transition"
            >
                Add Recipe
            </button>
            </form>
        </div>
    </section>
  )
}

export default AddRecipe