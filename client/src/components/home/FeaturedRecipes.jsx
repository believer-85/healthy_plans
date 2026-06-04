function FeaturedRecipes() {
  const recipes = [
    {
      id: 1,
      title: "Healthy Chicken Salad",

      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      title: "Protein Smoothie Bowl",

      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,
      title: "Vegetable Pasta",

      image:
        "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  return (
    <section className="px-8 py-20 bg-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Featured Recipes
        </h2>

        <p className="mt-4 text-gray-600">
          Easy and healthy meals for your busy lifestyle.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-60 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold">
                {recipe.title}
              </h3>

              <button className="mt-4 text-green-600 font-medium">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedRecipes