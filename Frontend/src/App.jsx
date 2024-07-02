import './App.scss'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

//* Importación de las páginas de la aplicación
import WorkoutsAI from './pages/RutinasAI.jsx'
import EditRecipes from './components/Recetas_components/EditRecipes.jsx';
import Recetas from './pages/Recetas.jsx'
import Assistant from './pages/Chatbot.jsx'
import DietAI from './pages/DietAI.jsx'
import RecipeAI from './pages/RecipesAI.jsx'
import NewRecipeForm from './components/Recetas_components/NewRecipeForm.jsx'
import Macros from './pages/Macros.jsx'
import Alimentos from './pages/Alimentos.jsx';
import Ejercicios from './pages/Ejercicios.jsx'
import Rutinas from './pages/Rutinas.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'


function App() {

  //* Estado para controlar si el menú de navegación está abierto o cerrado
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  //* Renderiza la aplicación, el menú de navegación y las rutas de la aplicación
  return (
    <>
      <div className={`App ${isNavBarOpen ? 'navbar-open' : 'navbar-closed'}`}>
        <NavBar isOpen={isNavBarOpen} setIsOpen={setIsNavBarOpen} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Calculadora" element={<Macros />} />
          <Route path="/Alimentos" element={<Alimentos />} />
          <Route path="/Recetas" element={<Recetas />} />
          <Route path="/Assistant" element={<Assistant />} />
          <Route path="/DietAI" element={<DietAI />} />
          <Route path="/RecipeAI" element={<RecipeAI />} />
          <Route path="/WorkoutAi" element={<WorkoutsAI />} />
          <Route path="/Rutinas" element={<Rutinas />} />
          <Route path="/Ejercicios" element={<Ejercicios />} />
          <Route path="/recetas/:id" element={<EditRecipes />} />
          <Route path="/recetas/new" element={<NewRecipeForm />} />
        </Routes>
      </div>
    </>
  )
}
export default App
