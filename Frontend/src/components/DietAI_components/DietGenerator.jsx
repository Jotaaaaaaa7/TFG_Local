import { useState, useEffect } from 'react';
import { generateDiet } from '../../Api_Calls/AI_functions';
import { getAlimentos } from '../../Api_Calls/Alimentos';
import '../AI_forms.scss';
import { Container, Form, Button, Row, Col, Spinner } from 'react-bootstrap';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const DietGenerator = () => {

  //* Estados
  const [response, setResponse] = useState('');
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [excludedFoods, setExcludedFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allFood, setAllFood] = useState([]);
  const [macros, setMacros] = useState({
    proteinas: '',
    carbohidratos: '',
    grasas: '',
    kcal: ''
  });

  //* Efecto para obtener los alimentos
  useEffect(() => {
    getAlimentos().then(foods => {
      setAllFood(foods);
    });
  }, []);

  //* Mapea los alimentos para que sean compatibles con el componente Select
  const allOptions = allFood.map(food => ({ value: food.nombre, label: food.nombre }));

  //* Función para manejar el click en el botón de alimentos guardados
  const handleClick = (e) => {
    e.preventDefault();
    const savedMacros = JSON.parse(localStorage.getItem('macros'));
    if (savedMacros) {
      setMacros({
        proteinas: savedMacros.proteinas || '',
        carbohidratos: savedMacros.carbohidratos || '',
        grasas: savedMacros.grasas || '',
        kcal: savedMacros.kcal || ''
      });
      const selectSaved = document.getElementById('selectSaved');
      selectSaved.style.animation = 'buttonAnimation 0.5s';
      // Remover la animación después de que se complete para que pueda ocurrir nuevamente en el próximo clic
      setTimeout(() => {
        selectSaved.style.animation = '';
      }, 500); // 500ms es la duración de la animación

      document.getElementById('proteinas').value = savedMacros.proteinas;
      document.getElementById('carbos').value = savedMacros.carbohidratos;
      document.getElementById('grasas').value = savedMacros.grasas;
      document.getElementById('kcal').value = savedMacros.kcal;
    }
  }

  //* Función para manejar los cambios en los campos de los macronutrientes
  const handleInputChange = (e) => {
    setMacros({
      ...macros,
      [e.target.name]: e.target.value
    });
  }

  //* Función para manejar los cambios en los campos de los alimentos seleccionados
  const handleSelectChange = selectedOptions => {
    const selectedFoods = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setSelectedFoods(selectedFoods);
    console.log(`Alimentos seleccionados: ${selectedFoods.join(', ')}`);
  };

  //* Función para manejar los cambios en los campos de los alimentos excluidos
  const handleExcludeChange = selectedOptions => {
    const excludedFoods = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setExcludedFoods(excludedFoods);
    console.log(`Alimentos Excluidos: ${excludedFoods.join(', ')}`);
  };

  //* Filtra los alimentos para que no se puedan seleccionar alimentos excluidos
  const includeOptions = allOptions.filter(option => !excludedFoods.includes(option.value));
  const excludeOptions = allOptions.filter(option => !selectedFoods.includes(option.value));

  //* Efecto para obtener los datos guardados en el localStorage
  useEffect(() => {
    const savedMacros = JSON.parse(localStorage.getItem('macros'));
    const savedSelectedFoods = JSON.parse(localStorage.getItem('selectedFoods'));
    const savedNotSelectedFoods = JSON.parse(localStorage.getItem('excludedFoods'));

    if (savedMacros) {
      setMacros(savedMacros);
    }

    if (savedSelectedFoods) {
      setSelectedFoods(savedSelectedFoods);
    }

    if (savedNotSelectedFoods) {
      setExcludedFoods(savedNotSelectedFoods);
    }
  }, []);




  //* Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('macros', JSON.stringify(macros));
    localStorage.setItem('selectedFoods', JSON.stringify(selectedFoods));
    localStorage.setItem('excludedFoods', JSON.stringify(excludedFoods));

    const numComidas = document.getElementById('numComidas').value;

    const prompt = `
  Dame un menú semanal que cumpla con lo siguiente: ${numComidas} comidas diarias,
  Debes incluir los siguientes alimentos, pero no deben ser los únicos: ${selectedFoods.join(', ')},
  excluye los siguientes alimentos: ${excludedFoods.join(', ')},
  y que cumpla con los siguientes macros diarios:
  ${macros.proteinas}gr de proteina,
  ${macros.carbohidratos}gr de carbohidratos,
  ${macros.grasas}g de grasas
  y ${macros.kcal} kcal.
  Ajústate lo máximo posible a estos macros diarios, sobre todo a las kcal.
  No quiero texto extra, solo la dieta. Especifica los macros y las kcal aproximadas de cada día.
  Dame el menú para los 7 días de la semana, es muy importante que no me des explicaciones, solo la dieta de los 7 días al completo.
  `;
    setLoading(true);
    const result = await generateDiet(prompt);
    setLoading(false);

    if (result && result.message) {
      setResponse(JSON.parse(JSON.stringify(result.message)));
    } else {
      console.error('Unexpected result:', result);
    }
  }

  return (
    <>
      <Container className="mt-5 form-container">
        <Form id='DietForm' className="AI-form" onSubmit={handleSubmit}>
          <Form.Label>Macronutrientes</Form.Label>
          <Button id='selectSaved' className="ml-8 select-button" onClick={handleClick}><b>⬇ Guardados ⬇</b></Button>
          <br />
          <Row id='Macrosform' className="mb-3 form-row">
            <Col className="form-col">
              <Form.Label>Prots</Form.Label>
              <Form.Control min={0} type="number" id="proteinas" name="proteinas" placeholder="gr" onChange={handleInputChange} className="form-control" />
            </Col>
            <Col className="form-col">
              <Form.Label>Carbs</Form.Label>
              <Form.Control min={0} type="number" id="carbos" name="carbohidratos" placeholder="gr" onChange={handleInputChange} className="form-control" />
            </Col>
            <Col className="form-col">
              <Form.Label>Grasas</Form.Label>
              <Form.Control min={0} type="number" id="grasas" name="grasas" placeholder="gr" onChange={handleInputChange} className="form-control" />
            </Col>
            <Col className="form-col">
              <Form.Label>Kcal</Form.Label>
              <Form.Control min={0} type="number" id="kcal" name="kcal" placeholder="Kcal" onChange={handleInputChange} className="form-control" />
            </Col>
          </Row>
          <br />
          <Form.Label>Incluir Alimentos: ✅</Form.Label>
          <Select
            closeMenuOnSelect={false}
            components={makeAnimated()}
            isMulti
            options={includeOptions}
            onChange={handleSelectChange}
            className="select-control"
          />
          <br />
          <Form.Label>Excluir Alimentos: ❌</Form.Label>
          <Select
            closeMenuOnSelect={false}
            components={makeAnimated()}
            isMulti
            options={excludeOptions}
            onChange={handleExcludeChange}
            className="select-control"
          />
          <br />
          <Form.Label>Nº de comidas al día:</Form.Label>
          <Form.Control type="number" id="numComidas" name="numComidas" min="1" max="5" className="form-control" />
          <br />
          <Button id='CalcularBtn' className="submit-button" type="submit">Generar Dieta<br /> con AI</Button>
        </Form>
        <div className="mt-4 result-container">
          {loading ? (
            <Spinner className='Spinner' animation="border" role="status">
            </Spinner>
          ) : (
            <div id="DietResult">
              <h1 className="result-title">Dieta Resultado: </h1>
              <br />
              <div dangerouslySetInnerHTML={{ __html: response }}></div>
            </div>
          )}
        </div>
      </Container>
    </>
  )
}

export default DietGenerator;