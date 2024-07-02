import axios from 'axios';
const Ruta_Principal = 'http://localhost:3000/api';

//* Función para obtener una rutina con sus ejercicios
const getRoutineWithExercises = async (id) => {
  const responseRutina = await axios.get(`${Ruta_Principal}/rutinas/${id}`);
  const rutina = responseRutina.data;
  const responseRelacion = await axios.get(`${Ruta_Principal}/rutinas-ejercicios`);
  const relacionEjercicios = responseRelacion.data.filter(relacion => relacion.id_rutina === id);
  const responseEjercicios = await axios.get(`${Ruta_Principal}/ejercicios`);
  const ejercicios = relacionEjercicios.map(relacion => {
    const ejercicio = responseEjercicios.data.find(ejercicio => ejercicio.id === relacion.id_ejercicio);
    return {
      nombre: ejercicio ? ejercicio.nombre : null,
      descripcion: ejercicio ? ejercicio.descripcion : null,
      video: ejercicio ? ejercicio.video : null,
      series: relacion.series,
      reps: relacion.repeticiones,
      comment: relacion.comment
    };
  });

  return {
    nombre: rutina.nombre,
    descripcion: rutina.descripcion,
    ejercicios: ejercicios
  };
};

//* Función para actualizar una rutina
const updateRutina = async (id, rutina) => {
  try {
    console.log(rutina);
    const response = await axios.put(`${Ruta_Principal}/rutinas/${id}`, {
      nombre: rutina.nombre,
      descripcion: rutina.descripcion,
      ejercicios: rutina.ejercicios
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

//* Función para crear una rutina
const createRutina = async (rutina) => {
  try {
    console.log(rutina);
    const response = await axios.post(`${Ruta_Principal}/rutinas`, {
      nombre: rutina.nombre,
      descripcion: rutina.descripcion,
      ejercicios: rutina.ejercicios
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

//* Función para eliminar una rutina
const deleteRutina = async (id) => {
  try {
    const response = await axios.delete(`${Ruta_Principal}/rutinas/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


export {
  getRoutineWithExercises,
  updateRutina,
  createRutina,
  deleteRutina
};