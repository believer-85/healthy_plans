import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import API_URL from "../config/api";

function EditMealPlan() {
  const { id } = useParams();

  const navigate = useNavigate();

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

  useEffect(() => {
    fetchMealPlan();
  }, [id]);

  const fetchMealPlan = async () => {
    try {
      const response =
        await axios.get(
          `${API_URL}/api/mealplans/${id}`
        );

      setFormData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

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

      await axios.put(
        `${API_URL}/api/mealplans/${id}`,
        formData,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      alert(
        "Meal Plan Updated Successfully"
      );

      navigate(
        "/admin/mealplans"
      );

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Edit Meal Plan
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          type="text"
          name="file_url"
          value={formData.file_url}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <input
          type="text"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <textarea
          name="content"
          rows="10"
          value={formData.content}
          onChange={handleChange}
          className="border p-3 w-full"
        />

        <button
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Update Meal Plan
        </button>

      </form>

    </div>
  );
}

export default EditMealPlan;