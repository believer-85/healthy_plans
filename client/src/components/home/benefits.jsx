function Benefits() {
  const benefits = [
    {
      id: 1,
      title: "Save Time",
      description:
        "Quick meal plans designed for busy professionals.",
    },

    {
      id: 2,
      title: "Eat Healthier",
      description:
        "Nutritious meals that support your lifestyle.",
    },

    {
      id: 3,
      title: "Stay Organized",
      description:
        "Weekly planners and grocery lists in one place.",
    },
  ]

  return (
    <section className="bg-gray-100 py-20 px-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Why Choose Us
        </h2>

        <p className="mt-4 text-gray-600">
          Helping professionals simplify healthy eating.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-14">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h3 className="text-2xl font-semibold">
              {benefit.title}
            </h3>

            <p className="mt-4 text-gray-600">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits