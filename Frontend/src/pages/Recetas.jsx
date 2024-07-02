import { getRecetas } from '../Api_Calls/Recetas';
import RecipeCard from '../components/Recetas_components/RecipeCard.jsx';
import { useState, useEffect } from 'react';
import FilterRecipes from '../components/Recetas_components/FilterRecipes.jsx';
import NewRecipeButton from '../components/Recetas_components/NewRecipeButton.jsx';
import PaginationComponent from '../components/Pagination.jsx';

//* Página que muestra todas las recetas
const Recetas = () => {

  //* Estados
  const [recetas, setRecetas] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const recipesPerPage = 12;

  //* Efecto para obtener las recetas
  useEffect(() => {
    getRecetas()
      .then((data) => {
        console.log(data);
        setRecetas(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //* Función para eliminar una receta
  const handleDelete = (id) => {
    setRecetas(recetas.filter((receta) => receta.id !== id));
  };

  //* Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  //* Calcula el índice del primer y último elemento en la página actual
  const indexOfLastRecipe = activePage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recetas.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <>
      <FilterRecipes />
      <NewRecipeButton />
      <div className="RecipeCards">
      {currentRecipes.map((receta) => (
        <RecipeCard receta={receta} key={receta.id} onDelete={handleDelete} />
      ))}
      </div>
      <PaginationComponent
        totalPages={Math.ceil(recetas.length / recipesPerPage)}
        currentPage={activePage}
        handlePageChange={handlePageChange}
      />
    </>
  );
}

export default Recetas;