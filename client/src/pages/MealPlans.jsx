import {
  useEffect,
  useState,
} from "react";
import API_URL from "../config/api";
import axios from "axios";

import {
  Link,
} from "react-router-dom";

function MealPlans() {

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

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Meal Plans
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {plans.map(
          (plan) => (

            <div
              key={plan.id}
              className="bg-white rounded-xl shadow overflow-hidden"
            >

              <img
                src={plan.image}
                alt={plan.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold">
                  {plan.title}
                </h2>

                <p className="mt-2">
                  {plan.description}
                </p>

                <Link
                  to={`/mealplans/${plan.id}`}
                  className="text-green-600 font-semibold block mt-4"
                >
                  View Plan →
                </Link>

              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
}

export default MealPlans;