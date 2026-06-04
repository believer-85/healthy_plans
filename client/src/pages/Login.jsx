import { useState } from "react"
import API_URL from "../config/api";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")

  const [password, setPassword] =
    useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        `${API_URL}/api/auth/login`,
        {
          email,
          password,
        }
      )

      console.log(response.data)

      // STORE TOKEN
      localStorage.setItem(
        "token",
        response.data.token
      )

      

      // STORE USER
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      )

      alert(response.data.message)

      // Force React to reload the app state
      window.location.href = "/dashboard";
    } catch (error) {
      console.log(error)

      alert(
        error.response?.data?.message ||
          "Something went wrong"
      )
    }
  }

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center">
          Welcome Back
        </h1>

        <p className="text-gray-600 text-center mt-3">
          Login to continue.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 mt-8"
        >
          {/* EMAIL */}
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
              required
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-green-600 font-semibold"
          >
            Signup
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Login