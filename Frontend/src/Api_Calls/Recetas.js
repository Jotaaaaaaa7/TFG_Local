import axios from 'axios';
const Ruta_Principal = 'http://localhost:3000/api';

//* Función para obtener las recetas
const getRecetas = async () => {
  const response = await axios.get(`${Ruta_Principal}/recetas`);
  return response.data;
};

//* Función para obtener una receta y sus ingredientes
const getRecetaAndIngredientes = async (id) => {
  const responseReceta = await axios.get(`${Ruta_Principal}/recetas/${id}`);
  const responseIngredients = await axios.get(`${Ruta_Principal}/ingredientes/receta?recetaId=${id}`);
  return { receta: responseReceta.data, ingredientes: responseIngredients.data };
};

//* Función para crear una receta
const createReceta = async (receta) => {
  try {
    const response = await fetch(`${Ruta_Principal}/recetas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(receta)
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

//* Función para actualizar una receta
const updateReceta = async (id, receta) => {
  if (id === undefined) {
    return;
  }
  try {
    const response = await fetch(`${Ruta_Principal}/recetas/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(receta)
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

//* Función para eliminar una receta
const deleteReceta = async (id) => {
  if (id === undefined) {
    console.error('El id de la receta no puede ser undefined');
    return;
  }
  try {
    console.log(`${Ruta_Principal}/recetas/${id}`);
    const response = await fetch(`${Ruta_Principal}/recetas/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};



export {
  getRecetas,
  getRecetaAndIngredientes,
  updateReceta,
  deleteReceta,
  createReceta
};