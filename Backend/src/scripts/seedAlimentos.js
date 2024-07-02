//* Importa el módulo 'fs' para trabajar con el sistema de archivos
const fs = require('fs');


fs.readFile('./Alimentos.json', 'utf8', (error, data) => {
  if (error) {
    console.error('Error al leer el archivo JSON:', error);
    return;
  }

  try {
    //* Convierte el contenido del archivo JSON en un objeto JavaScript
    const Alimentos = JSON.parse(data);

    //* Todos los alimentos en un solo array
    let allFoods = Object.values(Alimentos).reduce((acc, arr) => acc.concat(arr), []);
    console.log('Cantidad Total de alimentos:\n', allFoods.length);


    const Frutas = Alimentos.Frutas;
    const Carnes = Alimentos.Carnes;
    const Cereales = Alimentos.Cereales;
    const Lacteos = Alimentos.Lacteos;
    const Legumbres = Alimentos.Legumbres;
    const Pescados = Alimentos.Pescados;
    const Verduras = Alimentos.Verduras;
    const Huevos = Alimentos.Huevos;
    const FrutosSecos = Alimentos.FrutosSecos;
    const Quesos = Alimentos.Quesos;
    const Pastas = Alimentos.Pastas;
    const Procesados = Alimentos.Procesados;
    const Salsas = Alimentos.Salsas;
    const Dulces = Alimentos.Dulces;


    const axios = require('axios');

    //* A continuación se añaden las categorías de alimentos y los alimentos a la base de datos

    axios.post('http://localhost:3000/api/categorias-alimentos', { nombre: "Frutas" })
      .then(response => {
        console.log(`Categoria Frutas: ${response.status}`);
      })

    Frutas.forEach(fruta => {
      const newFruta = {
        nombre: fruta.nombre,
        prot: fruta.proteinas,
        carbs: fruta.carbohidratos,
        fat: fruta.grasas,
        kcal: fruta.calorias,
        precio: fruta.precio,
        isVegan: fruta.isVegan,
        GlutenFree: fruta.GlutenFree,
        unidad: fruta.unidad ? fruta.unidad : null,
        categoria: "Frutas",
      }
      axios.post('http://localhost:3000/api/alimentos', newFruta)
        .then(response => {
          console.log(`Fruta: ${fruta.nombre}, Respuesta: ${response.status}`);
        })
        .catch(error => {
          console.error(`Error al añadir la fruta: ${fruta.nombre}, Error: ${error.message}`);
        });
    });

    axios.post('http://localhost:3000/api/categorias-alimentos', { nombre: "Carnes" })
      .then(response => {
        console.log(`Categoria Carnes: ${response.status}`);
      })
    Carnes.forEach(carne => {
      const newCarne = {
        nombre: carne.nombre,
        prot: carne.proteinas,
        carbs: carne.carbohidratos,
        fat: carne.grasas,
        kcal: carne.calorias,
        precio: carne.precio,
        isVegan: carne.isVegan,
        GlutenFree: carne.GlutenFree,
        unidad: carne.unidad ? carne.unidad : null,
        categoria: "Carnes",
      }
      axios.post('http://localhost:3000/api/alimentos', newCarne)
        .then(response => {
          console.log(`Carne: ${carne.nombre}, Respuesta: ${response.status}`);
        })
        .catch(error => {
          console.error(`Error al añadir la carne: ${carne.nombre}, Error: ${error.message}`);
        });
    });

    axios.post('http://localhost:3000/api/categorias-alimentos', { nombre: "Cereales" })
      .then(response => {
        console.log(`Categoria Cereales: ${response.status}`);
      })
    Cereales.forEach(cereal => {
      const newCereal = {
        nombre: cereal.nombre,
        prot: cereal.proteinas,
        carbs: cereal.carbohidratos,
        fat: cereal.grasas,
        kcal: cereal.calorias,
        precio: cereal.precio,
        isVegan: cereal.isVegan,
        GlutenFree: cereal.GlutenFree,
        unidad: cereal.unidad ? cereal.unidad : null,
        categoria: "Cereales",
      }
      axios.post('http://localhost:3000/api/alimentos', newCereal)
        .then(response => {
          console.log(`Cereal: ${cereal.nombre}, Respuesta: ${response.status}`);
        })
        .catch(error => {
          console.error(`Error al añadir el cereal: ${cereal.nombre}, Error: ${error.message}`);
        });
    });

    axios.post('http://localhost:3000/api/categorias-alimentos', { nombre: "Lacteos" })
      .then(response => {
        console.log(`Categoria Lacteos: ${response.status}`);
      })
    Lacteos.forEach(lacteo => {
      const newLacteo = {
        nombre: lacteo.nombre,
        prot: lacteo.proteinas,
        carbs: lacteo.carbohidratos,
        fat: lacteo.grasas,
        kcal: lacteo.calorias,
        precio: lacteo.precio,
        isVegan: lacteo.isVegan,
        GlutenFree: lacteo.GlutenFree,
        unidad: lacteo.unidad ? lacteo.unidad : null,
        categoria: "Lacteos",
      }
      axios.post('http://localhost:3000/api/alimentos', newLacteo)
        .then(response => {
          console.log(`Lacteo: ${lacteo.nombre}, Respuesta: ${response.status}`);
        })
        .catch(error => {
          console.error(`Error al añadir el lacteo: ${lacteo.nombre}, Error: ${error.message}`);
        });
    });

    axios.post('http://localhost:3000/api/categorias-alimentos', { nombre: "Legumbres" })
      .then(response => {
        console.log(`Categoria Legumbres: ${response.status}`);
      })
    Legumbres.forEach(legumbre => {
      const newLegumbre = {
        nombre: legumbre.nombre,
        prot: legumbre.proteinas,
        carbs: legumbre.carbohidratos,
        fat: legumbre.grasas,
        kcal: legumbre.calorias,
        precio: legumbre.precio,
        isVegan: legumbre.isVegan,
        GlutenFree: legumbre.GlutenFree,
        unidad: legumbre.unidad ? legumbre.unidad : null,
        categoria: "Legumbres",
      }
      axios.post('http://localhost:3000/api/alimentos', newLegumbre)
        .then(response => {
          console.log(`Legumbre: ${legumbre.nombre}, Respuesta: ${response.status}`);
        })
        .catch(error => {
          console.error(`Error al añadir la legumbre: ${legumbre.nombre}, Error: ${error.message}`);
        });
    });

    axios.post('http://localhost:3000/api/categorias-alimentos', { nombre: "Pescados" })
      .then(response => {
        console.log(`Categoria Pescados: ${response.status}`);
      })
    Pescados.forEach(pescado => {
      const newPescado = {
        nombre: pescado.nombre,
        prot: pescado.proteinas,
        carbs: pescado.carbohidratos,
        fat: pescado.grasas,
        kcal: pescado.calorias,
        precio: pescado.precio,
        isVegan: pescado.isVegan,
        GlutenFree: pescado.GlutenFree,
        unidad: pescado.unidad ? pescado.unidad : null,
        categoria: "Pescados",
      }
      axios.post('http://localhost:3000/api/alimentos', newPescado)
        .then(response => {
          console.log(`Pescado: ${pescado.nombre}, Respuesta: ${response.status}`);
        })
        .catch(error => {
          console.error(`Error al añadir el pescado: ${pescado.nombre}, Error: ${error.message}`);
        });
    });

    axios.post('http://localhost:3000/api/categorias-alimentos', { nombre: "Verduras" })
      .then(response => {
        console.log(`Categoria Verduras: ${response.status}`);
      })
    Verduras.forEach(verdura => {
      const newVerdura = {
        nombre: verdura.nombre,
        prot: verdura.proteinas,
        carbs: verdura.carbohidratos,
        fat: verdura.grasas,
        kcal: verdura.calorias,
        precio: verdura.precio,
        isVegan: verdura.isVegan,
        GlutenFree: verdura.GlutenFree,
        unidad: verdura.unidad ? verdura.unidad : null,
        categoria: "Verduras",
      }
      axios.post('http://localhost:3000/api/alimentos', newVerdura)
        .then(response => {
          console.log(`Verdura: ${verdura.nombre}, Respuesta: ${response.status}`);
        })
        .catch(error => {
          console.error(`Error al añadir la verdura: ${verdura.nombre}, Error: ${error.message}`);
        });
    });

    axios.post('http://localhost:3000/api/categorias-alimentos', { nombre: "Huevos" })
      .then(response => {
        console.log(`Categoria Huevos: ${response.status}`);
      })
    Huevos.forEach(huevo => {
      const newHuevo = {
        nombre: huevo.nombre,
        prot: huevo.proteinas,
        carbs: huevo.carbohidratos,
        fat: huevo.grasas,
        kcal: huevo.calorias,
        precio: huevo.precio,
        isVegan: huevo.isVegan,
        GlutenFree: huevo.GlutenFree,
        unidad: huevo.unidad ? huevo.unidad : null,
        categoria: "Huevos",
      }
      axios.post('http://localhost:3000/api/alimentos', newHuevo)
        .then(response => {
          console.log(`Huevo: ${huevo.nombre}, Respuesta: ${response.status}`);
        })
        .catch(error => {
          console.error(`Error al añadir el huevo: ${huevo.nombre}, Error: ${error.message}`);
        });
    });

    axios.post('http://localhost:3000/api/categorias-alimentos', { nombre: "Frutos Secos" })
      .then(response => {
        console.log(`Categoria Frutos Secos: ${response.status}`);
      })
    FrutosSecos.forEach(frutoSeco => {
      const newFrutoSeco = {
        nombre: frutoSeco.nombre,
        prot: frutoSeco.proteinas,
        carbs: frutoSeco.carbohidratos,
        fat: frutoSeco.grasas,
        kcal: frutoSeco.calorias,
        precio: frutoSeco.precio,
        isVegan: frutoSeco.isVegan,
        GlutenFree: frutoSeco.GlutenFree,
        unidad: frutoSeco.unidad ? frutoSeco.unidad : null,
        categoria: "Frutos Secos",
      }
      axios.post('http://localhost:3000/api/alimentos', newFrutoSeco)
        .then(response => {
          console.log(`Fruto Seco: ${frutoSeco.nombre}, Respuesta: ${response.status}`);
        })
        .catch(error => {
          console.error(`Error al añadir el fruto seco: ${frutoSeco.nombre}, Error: ${error.message}`);
        });
    });

    axios.post('http://localhost:3000/api/categorias-alimentos', { nombre: "Quesos" })
      .then(response => {
        console.log(`Categoria Quesos: ${response.status}`);
      })
    Quesos.forEach(queso => {
      const newQueso = {
        nombre: queso.nombre,
        prot: queso.proteinas,
        carbs: queso.carbohidratos,
        fat: queso.grasas,
        kcal: queso.calorias,
        precio: queso.precio,
        isVegan: queso.isVegan,
        GlutenFree: queso.GlutenFree,
        unidad: queso.unidad ? queso.unidad : null,
        categoria: "Quesos",
      }
      axios.post('http://localhost:3000/api/alimentos', newQueso)
        .then(response => {
          console.log(`Queso: ${queso.nombre}, Respuesta: ${response.status}`);
        })
        .catch(error => {
          console.error(`Error al añadir el queso: ${queso.nombre}, Error: ${error.message}`);
        });
    });

    axios.post('http://localhost:3000/api/categorias-alimentos', { nombre: "Pastas" })
      .then(response => {
        console.log(`Categoria Pastas: ${response.status}`);
      })
    Pastas.forEach(pasta => {
      const newPasta = {
        nombre: pasta.nombre,
        prot: pasta.proteinas,
        carbs: pasta.carbohidratos,
        fat: pasta.grasas,
        kcal: pasta.calorias,
        precio: pasta.precio,
        isVegan: pasta.isVegan,
        GlutenFree: pasta.GlutenFree,
        unidad: pasta.unidad ? pasta.unidad : null,
        categoria: "Pastas",
      }
      axios.post('http://localhost:3000/api/alimentos', newPasta)
        .then(response => {
          console.log(`Pasta: ${pasta.nombre}, Respuesta: ${response.status}`);
        })
        .catch(error => {
          console.error(`Error al añadir la pasta: ${pasta.nombre}, Error: ${error.message}`);
        });
    });

    axios.post('http://localhost:3000/api/categorias-alimentos', { nombre: "Procesados" })
      .then(response => {
        console.log(`Categoria Procesados: ${response.status}`);
      })
    Procesados.forEach(procesado => {
      const newProcesado = {
        nombre: procesado.nombre,
        prot: procesado.proteinas,
        carbs: procesado.carbohidratos,
        fat: procesado.grasas,
        kcal: procesado.calorias,
        precio: procesado.precio,
        isVegan: procesado.isVegan,
        GlutenFree: procesado.GlutenFree,
        unidad: procesado.unidad ? procesado.unidad : null,
        categoria: "Procesados",
      }
      axios.post('http://localhost:3000/api/alimentos', newProcesado)
        .then(response => {
          console.log(`Procesado: ${procesado.nombre}, Respuesta: ${response.status}`);
        })
        .catch(error => {
          console.error(`Error al añadir el procesado: ${procesado.nombre}, Error: ${error.message}`);
        });
    });

    axios.post('http://localhost:3000/api/categorias-alimentos', { nombre: "Salsas" })
      .then(response => {
        console.log(`Categoria Salsas: ${response.status}`);
      })
    Salsas.forEach(salsa => {
      const newSalsa = {
        nombre: salsa.nombre,
        prot: salsa.proteinas,
        carbs: salsa.carbohidratos,
        fat: salsa.grasas,
        kcal: salsa.calorias,
        precio: salsa.precio,
        isVegan: salsa.isVegan,
        GlutenFree: salsa.GlutenFree,
        unidad: salsa.unidad ? salsa.unidad : null,
        categoria: "Salsas",
      }
      axios.post('http://localhost:3000/api/alimentos', newSalsa)
        .then(response => {
          console.log(`Salsa: ${salsa.nombre}, Respuesta: ${response.status}`);
        })
        .catch(error => {
          console.error(`Error al añadir la salsa: ${salsa.nombre}, Error: ${error.message}`);
        });
    });

    axios.post('http://localhost:3000/api/categorias-alimentos', { nombre: "Dulces" })
      .then(response => {
        console.log(`Categoria Dulces: ${response.status}`);
      })
    Dulces.forEach(dulce => {
      const newDulce = {
        nombre: dulce.nombre,
        prot: dulce.proteinas,
        carbs: dulce.carbohidratos,
        fat: dulce.grasas,
        kcal: dulce.calorias,
        precio: dulce.precio,
        isVegan: dulce.isVegan,
        GlutenFree: dulce.GlutenFree,
        unidad: dulce.unidad ? dulce.unidad : null,
        categoria: "Dulces",
      }
      axios.post('http://localhost:3000/api/alimentos', newDulce)
        .then(response => {
          console.log(`Dulce: ${dulce.nombre}, Respuesta: ${response.status}`);
        })
        .catch(error => {
          console.error(`Error al añadir el dulce: ${dulce.nombre}, Error: ${error.message}`);
        });
    });

    

  } catch (error) {
    console.error('Error al analizar el JSON:', error);
  }
});