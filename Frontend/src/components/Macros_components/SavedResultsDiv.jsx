import { Container, ListGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './SavedResultsDiv.scss';

//* Componente que muestra los resultados guardados en localStorage
const SavedResultsDiv = () => {

  //* Estado
  const [savedResults, setSavedResults] = useState(JSON.parse(localStorage.getItem('macros')) || {});

  //* Efecto para actualizar los resultados guardados
  useEffect(() => {
    const interval = setInterval(() => {
      const newResults = JSON.parse(localStorage.getItem('macros')) || {};
      if (JSON.stringify(newResults) !== JSON.stringify(savedResults)) {
        setSavedResults(newResults);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [savedResults]);

  //* Si no hay resultados guardados, muestra un mensaje
  if (!savedResults || !(savedResults.proteinas && savedResults.carbohidratos && savedResults.grasas && savedResults.kcal)) {
    return (
      <Container className="mt-5">
        Aún no hay resultados guardados
      </Container>
    )
  }

  return (
    <Container id='savedResults' className="mt-5">
      <p><b>Últimos resultados guardados:</b></p>
      <ListGroup variant="flush">
        <ListGroup.Item>Proteínas: {savedResults.proteinas} gr</ListGroup.Item>
        <ListGroup.Item>Carbohidratos: {savedResults.carbohidratos} gr</ListGroup.Item>
        <ListGroup.Item>Grasas: {savedResults.grasas} gr</ListGroup.Item>
        <ListGroup.Item>Kcal Totales: {savedResults.kcal} kcal</ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default SavedResultsDiv;