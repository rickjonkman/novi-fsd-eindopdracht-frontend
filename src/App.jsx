
import './App.css'
import {Routes, Route} from "react-router-dom";
import LandingPage from "./pages/other/landing-page/LandingPage.jsx";
import Login from "./pages/other/login-register/Login.jsx";
import Register from "./pages/other/login-register/Register.jsx";
import Dashboard from "./pages/other/dashboard-main/Dashboard.jsx";
import About from "./pages/other/about/About.jsx";
import Profile from "./pages/other/profile/Profile.jsx";
import GroceriesMain from "./pages/groceries/groceries-main/GroceriesMain.jsx";
import GroceryLists from "./pages/groceries/grocery-lists/GroceryLists.jsx";
import GroceriesShoppingMode from "./pages/groceries/shopping-mode/GroceriesShoppingMode.jsx";
import RecipesMain from "./pages/recipes/recipes-main/RecipesMain.jsx";
import RecipesAll from "./pages/recipes/recipes-all/RecipesAll.jsx";
import RecipesFavorites from "./pages/recipes/favorite-recipes/RecipesFavorites.jsx";
import RecipesNew from "./pages/recipes/add-new-recipe/RecipesAdd.jsx";
import CalendarWeekly from "./pages/calendar/weekly/CalendarWeekly.jsx"
import CalendarMonthly from "./pages/calendar/monthly/CalendarMonthly.jsx";
import CalendarMain from "./pages/calendar/calendar-main/CalendarMain.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/groceries" element={<GroceriesMain />}>
                <Route path="/groceries/grocery-lists" element={<GroceryLists />} />
                <Route path="groceries/shopping-mode" element={<GroceriesShoppingMode />} />
            </Route>

            <Route path="/recipes" element={<RecipesMain />}>
                <Route path="/recipes/all" element={<RecipesAll />} />
                <Route path="/recipes/favorites" element={<RecipesFavorites />} />
                <Route path="recipes/new" element={<RecipesNew />} />
            </Route>

            <Route path="/calendar" element={<CalendarMain />}>
                <Route path="/calendar-weekly" element={<CalendarWeekly />} />
                <Route path="/calendar-monthly" element={<CalendarMonthly />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
