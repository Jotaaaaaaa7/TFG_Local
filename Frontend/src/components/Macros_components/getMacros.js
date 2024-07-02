
//* Función para obtener los valores del formulario
const getFormValues = () => {

  const sexo = document.getElementById('sexo').value;
  const edad = document.getElementById('edad').value;
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
  const nivelActividad = document.getElementById('nivel-actividad').value;
  const objetivo = document.getElementById('objetivo').value;

  const resultsDiv = document.getElementById('results');

  return { sexo, edad, peso, altura, nivelActividad, objetivo, resultsDiv };
}

//* Función para calcular la TMB
const calculateTMB = (sexo, peso, altura, edad) => {
  let tmb;
  if (sexo === 'masculino') {
    tmb = (88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad)).toFixed(1);
  } else {
    tmb = (447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad)).toFixed(1);
  }
  return tmb;
}

//* Función para calcular el IMC
const calculateIMC = (peso, altura) => {
  return peso / ((altura / 100) ** 2);
}

//* Función para calcular el nivel de IMC
const calculateIMCLevel = (IMC) => {
  let IMC_Level = '';
  if (IMC < 18.5) {
    IMC_Level = `<p style='color: red'>Estás por debajo del peso normal</p>`;
  }
  else if (IMC >= 18.5 && IMC < 25) {
    IMC_Level = `<p style='color: green'>Estás en el rango de peso normal</p>`;
  }
  else if (IMC >= 25 && IMC < 30) {
    IMC_Level = `<p style='color: orange'>Tienes Sobrepeso</p>`;
  }
  else if (IMC >= 30 && IMC < 35) {
    IMC_Level = `<p style='color: red'>Tienes Obesidad leve</p>`;
  }
  else if (IMC >= 35 && IMC < 40) {
    IMC_Level = `<p style='color: red'>Tienes Obesidad media</p>`;
  }
  else {
    IMC_Level = `<p style='color: red'>Tienes Obesidad mórbida</p>`;
  }

  return IMC_Level;
}

//* Función para calcular los macronutrientes
const calculateMacros = (objetivo, nivelActividad, tmb) => {
  let prot, carb, fat, kcalTot

  if (nivelActividad === 'sedentario') {
    kcalTot = tmb * 1.2;
  } else if (nivelActividad === 'ligero') {
    kcalTot = tmb * 1.375;
  } else if (nivelActividad === 'moderado') {
    kcalTot = tmb * 1.55;
  } else if (nivelActividad === 'activo') {
    kcalTot = tmb * 1.725;
  } else if (nivelActividad === 'muy-activo') {
    kcalTot = tmb * 1.9;
  } else {
    kcalTot = tmb * 2.2;
  }

  kcalTot = Math.round(kcalTot);


  if (objetivo === 'perder-peso') {
    kcalTot -= 400;
    prot = Math.round(kcalTot * 0.3 / 4);
    carb = Math.round(kcalTot * 0.45 / 4);
    fat = Math.round(kcalTot * 0.25 / 9);
  }
  else if (objetivo === 'perder-peso-rapido') {
    kcalTot -= 800;
    prot = Math.round(kcalTot * 0.35 / 4);
    carb = Math.round(kcalTot * 0.35 / 4);
    fat = Math.round(kcalTot * 0.3 / 9);
  }
  else if (objetivo === 'ganar-peso') {
    kcalTot += 800;
    prot = Math.round(kcalTot * 0.25 / 4);
    carb = Math.round(kcalTot * 0.55 / 4);
    fat = Math.round(kcalTot * 0.2 / 9);
  }
  else if (objetivo === 'ganar-peso-rapido') {
    kcalTot += 800;
    prot = Math.round(kcalTot * 0.2 / 4);
    carb = Math.round(kcalTot * 0.6 / 4);
    fat = Math.round(kcalTot * 0.2 / 9);
  }
  else {
    kcalTot = Math.round(kcalTot);
    prot = Math.round(kcalTot * 0.35 / 4);
    carb = Math.round(kcalTot * 0.45 / 4);
    fat = Math.round(kcalTot * 0.25 / 9);
  }
  return { prot, carb, fat, kcalTot };
}

//* Función para la tabla del IMC
const updateImcTable = (IMC) => {
  const lowRow = document.getElementById('lowRow');
  const normalRow = document.getElementById('normalRow');
  const highRow = document.getElementById('highRow');
  const highRow2 = document.getElementById('highRow2');
  const fat1Row = document.getElementById('fat1Row');
  const fat2Row = document.getElementById('fat2Row');
  const fat3Row = document.getElementById('fat3Row');
  const fat4Row = document.getElementById('fat4Row');

  lowRow.style.fontWeight = ''; lowRow.style.border = '';
  normalRow.style.fontWeight = ''; normalRow.style.border = '';
  highRow.style.fontWeight = ''; highRow.style.border = '';
  highRow2.style.fontWeight = ''; highRow2.style.border = '';
  fat1Row.style.fontWeight = ''; fat1Row.style.border = '';
  fat2Row.style.fontWeight = ''; fat2Row.style.border = '';
  fat3Row.style.fontWeight = ''; fat3Row.style.border = '';
  fat4Row.style.fontWeight = ''; fat4Row.style.border = '';

  if (IMC < 18.5) {
    lowRow.style.fontWeight = 'bold';
    lowRow.style.border = '5px solid #0000ff'; // Azul
}
else if (IMC >= 18.5 && IMC <= 24.9) {
    normalRow.style.fontWeight = 'bold';
    normalRow.style.border = '5px solid #008000'; // Verde
}
else if (IMC >= 25 && IMC <= 26.9) {
    highRow.style.fontWeight = 'bold';
    highRow.style.border = '5px solid #ffff00'; // Amarillo
}
else if (IMC >= 27 && IMC <= 29.9) {
    highRow2.style.fontWeight = 'bold';
    highRow2.style.border = '5px solid #ffA500'; // Naranja
}
else if (IMC >= 30 && IMC <= 34.9) {
    fat1Row.style.fontWeight = 'bold';
    fat1Row.style.border = '5px solid #ff4500'; // Rojo claro
}
else if (IMC >= 35 && IMC <= 39.9) {
    fat2Row.style.fontWeight = 'bold';
    fat2Row.style.border = '5px solid #ff0000'; // Rojo
}
else if (IMC >= 40 && IMC <= 49.9) {
    fat3Row.style.fontWeight = 'bold';
    fat3Row.style.border = '5px solid #8b0000'; // Rojo oscuro
}
else {
    fat4Row.style.fontWeight = 'bold';
    fat4Row.style.border = '5px solid #800000'; // Rojo muy oscuro
}
}


//* Función principal
export const getMacros = () => {

  const { sexo, edad, peso, altura, nivelActividad, objetivo, resultsDiv } = getFormValues();


  if (sexo === '' || edad === '' || peso === '' || altura === '' || nivelActividad === '' || objetivo === '') {
    resultsDiv.style.display = 'block';
    return resultsDiv.innerHTML = `<p style='color: red'>Por favor, rellena todos los campos</p>`;
  }

  const tmb = calculateTMB(sexo, peso, altura, edad);
  const IMC = calculateIMC(peso, altura);

  const { prot, carb, fat, kcalTot } = calculateMacros(objetivo, nivelActividad, tmb);

  const IMC_Level = calculateIMCLevel(IMC);

  console.log(`Proteinas: ${prot} gr | Carbohidratos: ${carb} gr | Grasas: ${fat} gr | Consumo Recomendado: ${kcalTot} kcal`);

  resultsDiv.style.display = 'block';


  updateImcTable(IMC)

  const saveBtn = document.getElementById('GuardarBtn');

  saveBtn.style.backgroundColor = 'green';
  saveBtn.innerHTML = 'Guardar Resultados';


  saveBtn.addEventListener('mouseover', () => {
    saveBtn.style.backgroundColor = 'darkgreen'
    saveBtn.style.color = 'white';
    saveBtn.style.cursor = 'pointer';
  });

  saveBtn.addEventListener('mouseout', () => {
    saveBtn.style.backgroundColor = 'green';
    saveBtn.style.color = 'white';
  });


  if (prot <= 0 || carb <= 0 || fat <= 0 || kcalTot <= 0) {
    resultsDiv.style.display = 'block';
    return resultsDiv.innerHTML = `<p style='color: red'>Debes añadir valores Realistas 😎</p>`;
  }



  resultsDiv.innerHTML = `
  <ul>
  <li>Proteinas🥩: ${prot} gr</li>
  <li>Carbohidratos🍚: ${carb} gr</li>
  <li>Grasas🥑: ${fat} gr</li>
  <li>Consumo Recomendado⚡: ${kcalTot} kcal</li>
  </ul>
  <br>

  <p>Tasa metabólica basal (TMB): ${tmb} kcal</p>
  <p>Índice de Masa Corporal (IMC): ${IMC.toFixed(2)}</p>
  <strong>${IMC_Level}</strong>
  `

  return {
    proteinas: prot,
    carbohidratos: carb,
    grasas: fat,
    kcal: kcalTot
  };

}
