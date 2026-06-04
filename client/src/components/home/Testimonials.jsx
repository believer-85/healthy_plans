function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah",
      review:
        "The meal planners helped me stay healthy despite my busy schedule.",
    },

    {
      id: 2,
      name: "James",
      review:
        "Simple recipes and organized grocery lists saved me so much time.",
    },

    {
      id: 3,
      name: "Linda",
      review:
        "I finally stopped stressing about what to cook every day.",
    },
  ]

  return (
    <section className="py-20 px-8 bg-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          What Our Users Say
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-14">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 rounded-xl p-8"
          >
            <p className="text-gray-700">
              "{item.review}"
            </p>

            <h4 className="mt-6 font-bold">
              — {item.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials