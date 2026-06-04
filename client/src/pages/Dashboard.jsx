import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import API_URL from "../config/api";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const response =
        await axios.get(
          `${API_URL}/api/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) {
    return (
      <div className="text-center mt-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-3">
        Welcome Back, {user.name}
      </h1>

      <p className="text-gray-600 mb-8">
        Manage your account and activity.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="bg-green-100 p-6 rounded-lg">
          <h3 className="font-bold">
            Saved Recipes
          </h3>

          <p className="text-3xl mt-2">
            0
          </p>
          <Link
            to="/saved-recipes"
            className="block mt-3 text-green-600"
          >
            View Saved Recipes →
          </Link>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg">
          <h3 className="font-bold">
            Meal Plans
          </h3>

          <p className="text-3xl mt-2">
            0
          </p>
          <Link
            to="/admin/mealplans"
            className="block mt-3 text-green-600"
          >
            Manage Meal Plans →
          </Link>
        </div>

        <div className="bg-yellow-100 p-6 rounded-lg">
          <h3 className="font-bold">
            Account Type
          </h3>

          <p className="text-xl mt-2">
            {user.role}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;