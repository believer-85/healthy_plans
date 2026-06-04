import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  // CHECK AUTH
  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  useEffect(() => {
    const checkAuth = () => {
      setToken(localStorage.getItem("token"));

      setUser(
        JSON.parse(
          localStorage.getItem("user")
        )
      );
    };

    window.addEventListener(
      "storage",
      checkAuth
    );

    checkAuth();

    return () =>
      window.removeEventListener(
        "storage",
        checkAuth
      );
  }, []);

  // LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("token")

    localStorage.removeItem("user")

    window.location.href = "/login"
  }

  return (
    <nav className="bg-white shadow-md px-8 py-5 flex justify-between items-center">
      {/* LOGO */}
      <NavLink
        to="/"
        className="text-3xl font-bold text-green-600"
      >
        HealthyMeals
      </NavLink>

      {/* NAV LINKS */}
      <div className="flex items-center gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-semibold"
              : "text-gray-700 hover:text-green-600 transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-semibold"
              : "text-gray-700 hover:text-green-600 transition"
          }
        >
          Recipes
        </NavLink>
        <NavLink
          to="/admin/add-meal-plan"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-semibold"
              : "text-gray-700 hover:text-green-600 transition"
          }
        >
          Add Meal Plan
        </NavLink>

        <NavLink
          to="/mealplans"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-semibold"
              : "text-gray-700 hover:text-green-600 transition"
          }
        >
          Meal Plans
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-semibold"
              : "text-gray-700 hover:text-green-600 transition"
          }
        >
          About
        </NavLink>

        {/* AUTH LINKS */}
        {token ? (
          <>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "text-gray-700 hover:text-green-600 transition"
              }
            >
              Dashboard
            </NavLink>

            <span className="text-gray-600">
              Hi, {user?.name}
            </span>

            <NavLink 
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "text-gray-700 hover:text-green-600 transition"
              }
            >
              Profile
            </NavLink>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "text-gray-700 hover:text-green-600 transition"
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "text-gray-700 hover:text-green-600 transition"
              }
            >
              Signup
            </NavLink>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar