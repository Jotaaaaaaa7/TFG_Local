import axios from 'axios';
const Ruta_Principal = 'http://localhost:3000/api';

//* Función para obtener los ejercicios
const getEjercicios = async () => {
  const response = await axios.get(`${Ruta_Principal}/ejercicios`);
  return response.data;
};

//* Función para eliminar un ejercicio, no se utiliza en la aplicación
const deleteEjercicio = async (id) => {
  try {
    const response = await axios.delete(`${Ruta_Principal}/ejercicios/${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      // El servidor respondió con un estado de error
      console.error('Error del servidor:', error.response.data);
    } else if (error.request) {
      // La solicitud fue hecha pero no se recibió ninguna respuesta
      console.error('No se recibió ninguna respuesta:', error.request);
    } else {
      // Algo sucedió en la configuración de la solicitud que provocó un error
      console.error('Error al configurar la solicitud:', error.message);
    }
    throw error; // Re-lanza el error para que pueda ser manejado por la función que llamó a deleteEjercicio
  }
};

//* Función para obtener los músculos de un ejercicio
const getMusclesFromExercise = async (id) => {
  // Primero, obtener la relación entre los ejercicios y los músculos
  const responseRelacion = await axios.get(`${Ruta_Principal}/ejercicios-musculos`);
  const relacionMusculos = responseRelacion.data.filter(relacion => relacion.id_ejercicio === id);

  // Luego, obtener los nombres de los músculos
  const responseMusculos = await axios.get(`${Ruta_Principal}/musculos`);
  const nombresMusculos = relacionMusculos.map(relacion => {
    const musculo = responseMusculos.data.find(musculo => musculo.id === relacion.id_musculo);
    return musculo ? musculo.nombre : null;
  });

  // Filtrar cualquier nombre de músculo que sea null (en caso de que no se encuentre un músculo)
  return nombresMusculos.filter(nombre => nombre !== null);
};

export {
  getEjercicios,
  deleteEjercicio,
  getMusclesFromExercise
};