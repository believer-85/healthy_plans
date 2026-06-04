function Hero() {
    return (
        <section className="bg-green-100 min-h-screen flex items-center px-8">
            <div className="max-w-3x1">
                <h1 className="text-5x1 font-bold text-gray-900 leading-tight">Healthy meal plans for busy proffesionals</h1>
                <p className="mt-6 text-lg text-gray-700">Discover easy recipes, organized grocery lists, and dowloadable meal planners designed to save time and help you stay healthy</p>

                <div className="mt-8 flex gap-4">
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg">Explore Recipes</button>
                    <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg">View Meal Plans</button>
                </div>
            </div>
        </section>
    )
}

export default Hero 