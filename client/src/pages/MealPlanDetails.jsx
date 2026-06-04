import {
  useEffect,
  useState,
} from "react";
import API_URL from "../config/api";

import axios from "axios";

import {
  useParams,
} from "react-router-dom";

function MealPlanDetails() {

  const { id } =
    useParams();

  const [plan,
    setPlan] =
    useState(null);

  useEffect(() => {

    fetchPlan();

  }, [id]);

  const fetchPlan =
    async () => {

      try {

        const response =
          await axios.get(
            `${API_URL}/api/mealplans/${id}`
          );

        setPlan(
          response.data
        );

      } catch (err) {
        console.log(err);
      }
    };

  if (!plan) {
    return (
      <h1>
        Loading...
      </h1>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">

      <img
        src={plan.image}
        alt={plan.title}
        className="w-full h-[450px] object-cover rounded-xl"
      />

      <h1 className="text-5xl font-bold mt-8">
        {plan.title}
      </h1>

      <p className="mt-4">
        {plan.description}
      </p>

      <div className="mt-6">

        <strong>
          Duration:
        </strong>{" "}
        {plan.duration}

      </div>

      <div>

        <strong>
          Goal:
        </strong>{" "}
        {plan.goal}

      </div>

      <div className="mt-10 whitespace-pre-line">
        {plan.content}
      </div>

    </div>
  );
}

export default MealPlanDetails;