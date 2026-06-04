import Hero from "../components/home/Hero"

import FeaturedRecipes from "../components/home/FeaturedRecipes"

import Benefits from "../components/home/benefits"

import MealPlansPreview from "../components/home/MealPlansPreview"

import Testimonials from "../components/home/Testimonials"

import Newsletter from "../components/home/Newsletter"

function Home() {
  return (
    <div>
      <Hero />

      <FeaturedRecipes />

      <Benefits />

      <MealPlansPreview />

      <Testimonials />

      <Newsletter />
    </div>
  )
}

export default Home