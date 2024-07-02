import { getEjercicios } from '../Api_Calls/Ejercicios';
import EjerciciosCard from '../components/Ejercicios_components/EjerciciosCard.jsx';
import { useState, useEffect } from 'react';
import FilterEjercicios from '../components/Ejercicios_components/FilterEjercicios.jsx';
import PaginationComponent from '../components/Pagination.jsx';

//* Página que muestra todos los ejercicios
const Ejercicios = () => {

  //* Estados
  const [ejercicios, setEjercicios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  //* Efecto para obtener los ejercicios
  useEffect(() => {
    getEjercicios()
      .then((data) => {
        // console.log(data);
        setEjercicios(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //* Función para eliminar un ejercicio, está deshabilitada
  const handleDelete = (id) => {
    setEjercicios(ejercicios.filter((ejercicio) => ejercicio.id !== id));
  };

    //* Calcula el índice del primer y último elemento en la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
    //* Obtiene los elementos para la página actual
    const currentItems = ejercicios.slice(indexOfFirstItem, indexOfLastItem);
  
    //* Calcula el número total de páginas
    const totalPages = Math.ceil(ejercicios.length / itemsPerPage);
  
  //* Función para cambiar de página
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

  return (
    <>
      <FilterEjercicios />
      <div className="EjerciciosCards">
        {currentItems.map(ejercicio => (
          <EjerciciosCard key={ejercicio.id} ejercicio={ejercicio} onDelete={handleDelete} />
        ))}
      </div>
      <PaginationComponent totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
    </>
  );
}

export default Ejercicios;