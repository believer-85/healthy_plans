import { useEffect,useState} from "react";

import axios from "axios";
import API_URL from "../config/api";

import {
  Link,
} from "react-router-dom";

function AdminMealPlans() {

  const [plans,
    setPlans] =
    useState([]);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans =
    async () => {

      try {

        const response =
          await axios.get(
            `${API_URL}/api/mealplans`
          );

        setPlans(
          response.data
        );

      } catch (err) {
        console.log(err);
      }
    };

  const deletePlan =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete this meal plan?"
        );

      if (!confirmDelete)
        return;

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        await axios.delete(
          `${API_URL}/api/mealplans/${id}`,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        fetchPlans();

      } catch (err) {
        console.log(err);
      }
    };

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Manage Meal Plans
      </h1>

      <div className="space-y-4">

        {plans.map((plan) => (

          <div
            key={plan.id}
            className="bg-white shadow rounded-lg p-5 flex justify-between items-center"
          >

            <div>

              <h2 className="font-bold text-xl">
                {plan.title}
              </h2>

              <p>
                KES {plan.price}
              </p>

            </div>

            <div className="flex gap-3">

              <Link
                to={`/admin/edit-meal-plan/${plan.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Edit
              </Link>

              <button
                onClick={() =>
                  deletePlan(
                    plan.id
                  )
                }
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminMealPlans;