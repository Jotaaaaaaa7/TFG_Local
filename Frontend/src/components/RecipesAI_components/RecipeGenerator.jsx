import { Container, Form, Button, Spinner } from 'react-bootstrap';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
// import ListaAlimentos from '../../BBDD/Alimentos.json' //* Cambiar a los de la DB
import { useState, useEffect } from 'react';
import { generateRecipe } from '../../Api_Calls/AI_functions';
import { getAlimentos } from '../../Api_Calls/Alimentos';
import '../AI_forms.scss';

//* Componente que muestra el formulario para generar una receta con AI
const RecipeGenerator = () => {

  //* Estados
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [tiempoPreparacion, setTiempoPreparacion] = useState(0);
  const [isVegan, setIsVegan] = useState(false);
  const [isCeliac, setIsCeliac] = useState(false);
  const [otherRestrictions, setOtherRestrictions] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [allFood, setAllFood] = useState([]);

  //* Efecto para obtener los alimentos
  useEffect(() => {
    getAlimentos().then(foods => {
      setAllFood(foods);
    });
  }, []);

  //* Opciones para el Select
  const allOptions = allFood.map(food => ({ value: food.nombre, label: food.nombre }));

  //* Función para manejar los cambios en el Select
  const handleSelectChange = selectedOptions => {
    const selectedFoods = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setSelectedFoods(selectedFoods);
    console.log(`Alimentos seleccionados: ${selectedFoods.join(', ')}`);
  };

  //* Función para manejar los cambios en el tiempo de preparación
  const handleTimeChange = (e) => {
    setTiempoPreparacion(e.target.value);
  }

  //* Función para manejar los cambios en las restricciones alimentarias
  const handleVeganChange = (e) => {
    setIsVegan(e.target.checked);
  }

  //* Función para manejar los cambios en las restricciones alimentarias
  const handleCeliacChange = (e) => {
    setIsCeliac(e.target.checked);
  }

  //* Función para manejar los cambios en las restricciones alimentarias
  const handleOtherRestrictionsChange = (e) => {
    setOtherRestrictions(e.target.value);
  }

  //* Función para enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('selectedFoods', JSON.stringify(selectedFoods));

    const prompt = `
  Genera una receta utilizando solo los siguientes alimentos: ${selectedFoods.join(', ')}.
  La receta ${isVegan ? 'debe ser' : 'no necesita ser'} vegana.
  La receta ${isCeliac ? 'debe ser apta para' : 'no necesita ser apta para'} celíacos.
  ${otherRestrictions ? 'Las siguientes restricciones también deben ser consideradas: ' + otherRestrictions : ''}
  `;

    console.log(prompt);

    setLoading(true);
    const result = await generateRecipe(prompt);
    setLoading(false);

    // Reemplaza los saltos de línea con etiquetas HTML <br/>
    const formattedMessage = result.message.replace(/\n/g, '<br/>');

    // Asegúrate de que result.message es lo que esperas antes de establecerlo en el estado
    if (result && result.message) {
      setResponse(formattedMessage);
    } else {
      console.error('Unexpected result:', result);
    }
  }


  return (
    <Container className="mt-5 form-container">
      <Form className="AI-form" onSubmit={handleSubmit}>
        <Form.Label>Incluir Alimentos: ✅</Form.Label>
        <Select
          closeMenuOnSelect={false}
          components={makeAnimated()}
          isMulti
          options={allOptions}
          onChange={handleSelectChange}
          className="select-control"
        />
        <br />
        <Form.Label>Tiempo máximo de preparación</Form.Label>
        <Form.Control type="number" name="tiempoPreparacion" placeholder="minutos" onChange={handleTimeChange} className="form-control" />
        <br />
        <Form.Label>Restricciones Alimentarias</Form.Label>
        <Form.Check type="checkbox" label="Vegano" onChange={handleVeganChange} />
        <Form.Check type="checkbox" label="Celíaco" onChange={handleCeliacChange} />
        <br />
        <Form.Label>Otras restricciones</Form.Label>
        <Form.Control type="text" placeholder="Escribe aquí cualquier otra restricción" onChange={handleOtherRestrictionsChange} className="form-control" />
        <br />
        <Button id='CalcularBtn' type="submit" className="btn btn-primary submit-button">Generar Receta<br /> con AI</Button>
      </Form>
      <div className="mt-4 result-container">
        {loading ? (
          <Spinner className='Spinner' animation="border" role="status">
          </Spinner>
        ) : (
          <div id="DietResult">
            <h1 className="result-title">Receta Resultado:</h1>
            <br />
            <div dangerouslySetInnerHTML={{ __html: response }}></div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default RecipeGenerator;