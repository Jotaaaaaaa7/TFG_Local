const fs = require('fs');


//* Leer el archivo Ejericicos.JSOn e introducimos esos datos a la base de datos con el formato adecuado.

fs.readFile('./Ejercicios.json', 'utf8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  try {

    const ejercicios = JSON.parse(data);

    const axios = require('axios');

    ejercicios.forEach(async (ejercicio) => {

      const equipo = ejercicio.equipo.map(equipo => equipo.nombre).join(', ')
      const newExercise = {
        nombre: ejercicio.nombre,
        descripcion: ejercicio.descripcion,
        nivel: ejercicio.nivel,
        video: ejercicio.video,
        equipo: equipo,
        musculos: ejercicio.musculos
      };
      axios.post('http://localhost:3000/api/ejercicios', newExercise)
        .then((response) => {
          // console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }
  catch (error) {
    console.error(error);
  }
}
);