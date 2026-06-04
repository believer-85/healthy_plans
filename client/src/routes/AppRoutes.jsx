import { Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import About from "../pages/About"
import Recipes from "../pages/Recipes"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import RecipeDetails from "../pages/RecipeDetails"
import MealPlans from "../pages/MealPlans"
import Dashboard from "../pages/Dashboard"
import ProtectedRoute from "../components/ProtectedRoute"
import AddRecipe from "../pages/AddRecipe"
import ProtectedAdminRoute from "../components/ProtectedAdminRoute"
import SavedRecipes from "../pages/SavedRecipes";
import MealPlanDetails from "../pages/MealPlanDetails"
import AdminAddMealPlan from "../pages/AdminAddMealPlan"
import AdminMealPlans from "../pages/AdminMealPlans";
import EditMealPlan from "../pages/EditMealPlan";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="recipes/:id" element={<RecipeDetails />}/>
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin/add-recipe" element={<ProtectedAdminRoute><AddRecipe /></ProtectedAdminRoute>}/>
                <Route path="mealplans" element={<MealPlans />}/>
                <Route path="/mealplans/:id" element={<MealPlanDetails />}/>
                <Route path="/admin/add-meal-plan" element={<ProtectedRoute><AdminAddMealPlan /></ProtectedRoute>}/>
                <Route path="/admin/mealplans" element={<ProtectedRoute><AdminMealPlans /></ProtectedRoute>}/>
                <Route path="/admin/edit-meal-plan/:id" element={<ProtectedRoute><EditMealPlan /></ProtectedRoute>}/>
                <Route path="*" element={<NotFound />}/>
                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/saved-recipes" element={<ProtectedRoute><SavedRecipes /></ProtectedRoute>}/>
            </Route>
        </Routes>
    )
}
export default AppRoutes