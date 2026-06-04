import { useState } from "react"
import API_URL from "../config/api";

function Contact() {
  const [name, setName] = useState("")

  const [email, setEmail] = useState("")

  const [message, setMessage] =
    useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({
      name,
      email,
      message,
    })
  }

  return (
    <section className="px-8 py-20 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-5xl font-bold text-center">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mt-4">
          We'd love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >
          <div>
            <label className="block font-medium mb-2">
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Message
            </label>

            <textarea
              rows="5"
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact