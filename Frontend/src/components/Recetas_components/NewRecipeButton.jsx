import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

//* Componente que muestra un botón para crear una nueva receta
const NewRecipeButton = () => {
  return (
    <Button href='/recetas/new' className='ButtonToCreate'>Crear nueva receta</Button>
  );
};

export default NewRecipeButton;