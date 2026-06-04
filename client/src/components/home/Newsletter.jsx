function Newsletter() {
  return (
    <section className="py-20 px-8 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold">
          Join Our Newsletter
        </h2>

        <p className="mt-4 text-gray-300">
          Get healthy recipes and meal planning tips every week.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 rounded-lg text-black"
          />

          <button className="bg-green-600 px-6 py-3 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter