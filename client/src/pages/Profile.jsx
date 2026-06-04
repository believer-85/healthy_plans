import { useState } from "react";

function Profile() {

  const user =
  JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const [name,
    setName] =
    useState(
      user?.name || ""
    );

  const [email,
    setEmail] =
    useState(
      user?.email || ""
    );

  return (
    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        My Profile
      </h1>

      <div className="bg-white shadow rounded-lg p-6">

        <div className="mb-4">

          <label>
            Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="border p-3 w-full"
          />

        </div>

        <div>

          <label>
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="border p-3 w-full"
          />

        </div>

        <button
          className="bg-green-600 text-white px-5 py-2 rounded mt-6"
        >
          Update Profile
        </button>

      </div>

    </div>
  );
}

export default Profile;