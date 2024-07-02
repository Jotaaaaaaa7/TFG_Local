const fs = require('fs');
const axios = require('axios');

//* Leer el archivo Musculos.json e introducimos esos datos a la base de datos con el formato adecuado.
//* Antes de añadir los músculos, añadimos los grupos musculares a la tabla de grupos musculares
fs.readFile('./Musculos.json', 'utf8', async (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  try {
    const musculos = JSON.parse(data);

    // Extraer los grupos únicos
    const grupos = [...new Set(musculos.map(musculo => musculo.grupo))];

    // Añadir los grupos a la tabla de grupos musculares
    for (let grupo of grupos) {
      await axios.post('http://localhost:3000/api/grupos-musculares', { nombre: grupo })
        .catch(console.error);
    }

    // Añadir los músculos a la tabla de músculos
    for (let musculo of musculos) {
      const newMuscle = {
        nombre: musculo.nombre,
        grupo: musculo.grupo
      };
      await axios.post('http://localhost:3000/api/musculos', newMuscle)
        .catch(console.error);
    }
  }
  catch (error) {
    console.error(error);
  }
});