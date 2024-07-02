import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RutinaCard from './RutinasCard';
import Button from 'react-bootstrap/Button';
import '../ButtonsToCreate.scss';

//* Componente que muestra un botón para crear una nueva rutina
const NewRutinaButton = () => {

  //* Estados
  const [rutinas, setRutinas] = useState([]);
  const [creating, setCreating] = useState(false);
  const [newRutina, setNewRutina] = useState({});

  //* Efecto para obtener las rutinas
  useEffect(() => {
    axios.get(`http://localhost:3000/api/rutinas`)
      .then(response => setRutinas(response.data))
      .catch(error => console.error(error));
  }, []);

  //* Función para crear una rutina
  const handleCreateRutina = () => {
    axios.post(`http://localhost:3000/api/rutinas`, newRutina)
      .then(response => {
        setRutinas(prevRutinas => [response.data, ...prevRutinas]);
        setCreating(false);
      })
      .catch(error => console.error(error));
  };

  //* Función para empezar a crear una rutina
  const handleStartCreating = () => {
    setNewRutina({
      nombre: '',
      descripcion: '',
      ejercicios: [{
        nombre: '',
        series: '',
        repeticiones: '',
        descanso: ''
      }]
    });
    setCreating(true);
  };

  //* Función para manejar los cambios en los campos del formulario
  const handleInputChange = (event) => {
    setNewRutina({
      ...newRutina,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div id='newRutina'>
      {creating ? (
        <>
          <Button className='ButtonToCreate' variant="primary">Crear nueva rutina</Button>
          <RutinaCard rutina={newRutina} onInputChange={handleInputChange} onCreate={handleCreateRutina} isNew={true} />
        </>
      ) : (
        <>
          <Button className='ButtonToCreate' variant="primary" onClick={handleStartCreating}>Crear nueva rutina</Button>
        </>
      )}
    </div>
  );
};

export default NewRutinaButton;