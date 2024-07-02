import axios from 'axios';
const Ruta_Principal = 'http://localhost:3000/api';

//* Función para obtener los alimentos
const getAlimentos = async () => {
  const response = await axios.get(`${Ruta_Principal}/alimentos`);
  return response.data;
};

//* Función para obtener las categorías de alimentos
const getCategorias = async () => {
  const response = await axios.get(`${Ruta_Principal}/categorias-alimentos`);
  return response.data;
};

//* Función para eliminar un alimento
const deleteAlimento = async (id) => {
  const response = await axios.delete(`${Ruta_Principal}/alimentos/${id}`);
  return response.data;
};

//* Función para actualizar un alimento
const updateAlimento = async (id, data) => {
  const response = await axios.put(`${Ruta_Principal}/alimentos/${id}`, data);
  return response.data;
};

//* Función para crear un alimento
const createAlimento = async (data) => {
  const response = await axios.post(`${Ruta_Principal}/alimentos`, data);
  return response.data;
};

export {
  getAlimentos,
  getCategorias,
  deleteAlimento,
  updateAlimento,
  createAlimento,
};