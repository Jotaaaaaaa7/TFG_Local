import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RutinaCard from '../components/Rutinas_components/RutinasCard';
import NewRutinaButton from '../components/Rutinas_components/NewRutinaButton';
import { Row, Col } from 'react-bootstrap';
import '../components/ButtonsToCreate.scss'

//* Componente que muestra todas las rutinas
const Rutinas = () => {

  //* Estado
  const [rutinas, setRutinas] = useState([]);

  //* Efecto para obtener las rutinas
  useEffect(() => {
    axios.get(`http://localhost:3000/api/rutinas`)
      .then(response => setRutinas(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div id="mainContainer">
      <Row style={{ marginTop: '80px' }} >
        <Col xs={12}>
          <NewRutinaButton />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          {rutinas.map(rutina => (
            <RutinaCard key={rutina.id} routineId={rutina.id} rutinas={rutinas} setRutinas={setRutinas} />
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Rutinas;