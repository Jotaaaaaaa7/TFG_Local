
//* Importamos axios y definimos la ruta raíz de nuestra API
import axios from 'axios';
const Ruta_Principal = 'http://localhost:3000/api';

//* Función para generar una dieta
const generateDiet = async (prompt) => {
  const response = await axios.post(`${Ruta_Principal}/generateDiet`, { prompt: prompt });
  return response.data;
};

//* Función para generar una receta
const generateRecipe = async (prompt) => {
  const response = await axios.post(`${Ruta_Principal}/generateRecipe`, { prompt: prompt });
  return response.data;
};

//* Función para generar un entrenamiento
const generateWorkout = async (prompt) => {
  const response = await axios.post(`${Ruta_Principal}/generateWorkout`, { prompt: prompt });
  return response.data;
};

//* Función para utilizar el chatbot
const useChatBot = async (prompt) => {
  const response = await axios.post(`${Ruta_Principal}/useChatBot`, { prompt: prompt });
  return response.data;
};

//* Exportamos las funciones
export {
  generateDiet,
  generateRecipe,
  generateWorkout,
  useChatBot
};