import { useState } from "react";
import axios from "axios";
import API_URL from "../config/api";

function AdminAddMealPlan() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    file_url: "",
    duration: "",
    goal: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem("token");

      await axios.post(
        `${API_URL}/api/mealplans`,
        formData,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      alert(
        "Meal Plan Created Successfully"
      );

      setFormData({
        title: "",
        description: "",
        price: "",
        image: "",
        file_url: "",
        duration: "",
        goal: "",
        content: "",
      });

    } catch (err) {
      console.log(err);
      alert(
        "Failed to create meal plan"
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Add Meal Plan
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-3 w-full"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          type="text"
          name="file_url"
          placeholder="PDF/File URL"
          value={formData.file_url}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={formData.duration}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          type="text"
          name="goal"
          placeholder="Goal"
          value={formData.goal}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <textarea
          name="content"
          placeholder="Meal Plan Content"
          value={formData.content}
          onChange={handleChange}
          rows="10"
          className="border p-3 w-full"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Create Meal Plan
        </button>

      </form>

    </div>
  );
}

export default AdminAddMealPlan;