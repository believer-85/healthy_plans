function About() {
  return (
    <section className="px-8 py-20 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center">
          About Us
        </h1>

        <p className="mt-8 text-lg text-gray-700 leading-8">
          HealthyMeals was created to help busy
          professionals eat healthier without the
          stress of complicated meal preparation.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          We provide simple recipes, downloadable
          meal planners, and organized grocery
          lists designed to save time while
          supporting a healthy lifestyle.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold">
              Our Mission
            </h2>

            <p className="mt-4 text-gray-600">
              Simplifying healthy eating for busy
              lifestyles. No effort just pure health grow.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold">
              Our Vision
            </h2>

            <p className="mt-4 text-gray-600">
              Making healthy meal planning easy and
              accessible.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold">
              Our Goal
            </h2>

            <p className="mt-4 text-gray-600">
              Helping people build healthier daily
              habits.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About