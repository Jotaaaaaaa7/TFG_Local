import { Container, Form, Button, Spinner } from 'react-bootstrap';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useState } from 'react';
import { generateWorkout } from '../../Api_Calls/AI_functions';
import '../AI_forms.scss';

const WorkoutAI = () => {
  const [selectedMuscles, setSelectedMuscles] = useState([]);
  const [totalExercises, setTotalExercises] = useState(0);
  const [totalSeries, setTotalSeries] = useState(0);
  const [selectedEquipment, setSelectedEquipment] = useState([]);

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handleSelectChange = selectedOptions => {
    const selectedMuscles = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setSelectedMuscles(selectedMuscles);
    console.log(`Músculos seleccionados: ${selectedMuscles.join(', ')}`);
  };

  const handleEquipmentChange = selectedOptions => {
    const selectedEquipment = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setSelectedEquipment(selectedEquipment);
    console.log(`Equipamiento seleccionado: ${selectedEquipment.join(', ')}`);
  };

  const handleTotalExercisesChange = (e) => {
    setTotalExercises(e.target.value);
    console.log(`Total de ejercicios: ${e.target.value}`);
  }

  const handleTotalSeriesChange = (e) => {
    setTotalSeries(e.target.value);
    console.log(`Total de series: ${e.target.value}`);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const prompt = `Genera un entrenamiento para los siguientes músculos: ${selectedMuscles ? selectedMuscles.join(', ') : 'Ninguno'}.
    El entrenamiento debe tener un total de ${totalExercises ? totalExercises : '0'} ejercicios y ${totalSeries ? totalSeries : '0'} series.
    Equipamiento disponible: ${selectedEquipment ? selectedEquipment.join(', ') : 'Ninguno'}.`;

    console.log(prompt);

    setLoading(true);
    const result = await generateWorkout(prompt);
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

  const muscleOptions = [
    { value: 'biceps', label: 'Bíceps' },
    { value: 'triceps', label: 'Tríceps' },
    { value: 'pecho', label: 'Pecho' },
    { value: 'espalda', label: 'Espalda' },
    { value: 'piernas', label: 'Piernas' },
    // Añade más opciones según sea necesario
  ];

  const equipmentOptions = [
    { value: 'mancuernas', label: 'Mancuernas' },
    { value: 'maquinas de gimnasio', label: 'Máquinas de gimnasio' },
    { value: 'peso corporal', label: 'Peso corporal' },
  ];

  return (
    <Container id='WorkoutGen' className="mt-5 form-container">
      <Form id='WorkoutForm' className="AI-form" onSubmit={handleSubmit}>
        <Form.Label className="form-label">Músculos a trabajar</Form.Label>
        <Select
          closeMenuOnSelect={false}
          components={makeAnimated()}
          isMulti
          options={muscleOptions}
          onChange={handleSelectChange}
          className="select-control"
        />
        <br />
        <Form.Label className="form-label">Equipamiento disponible</Form.Label>
        <Select
          closeMenuOnSelect={false}
          components={makeAnimated()}
          isMulti
          options={equipmentOptions}
          onChange={handleEquipmentChange}
          className="select-control"
        />
        <br />
        <Form.Label className="form-label">Total de ejercicios</Form.Label>
        <Form.Control type="number" id="totalExercises" name="totalExercises" placeholder="Total de ejercicios" onChange={handleTotalExercisesChange} className="form-control" />
        <br />
        <Form.Label className="form-label">Total de series</Form.Label>
        <Form.Control type="number" id="totalSeries" name="totalSeries" placeholder="Total de series" onChange={handleTotalSeriesChange} className="form-control" />
        <br />
        <Button id='GenerateBtn' type="submit" className="btn btn-primary submit-button">Generar Entrenamiento con AI</Button>
      </Form>
      <div className="mt-4 result-container">
        {loading ? (
          <Spinner className='Spinner' animation="border" role="status">
          </Spinner>
        ) : (
          <div id="DietResult">
            <h1 className="result-title">Entrenamiento Resultado:</h1>
            <br />
            <div dangerouslySetInnerHTML={{ __html: response }}></div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default WorkoutAI;