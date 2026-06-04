import {
  useEffect,
  useState,
} from "react";
import API_URL from "../config/api";

import axios from "axios";

function SavedRecipes() {
  const [recipes, setRecipes] =
    useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites =
    async () => {
      try {
        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await axios.get(
            `${API_URL}/api/favorites`,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        setRecipes(
          response.data
        );
      } catch (err) {
        console.log(err);
      }
    };

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">
        My Saved Recipes
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="font-bold">
                {recipe.title}
              </h2>

              <p>
                {
                  recipe.description
                }
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default SavedRecipes;