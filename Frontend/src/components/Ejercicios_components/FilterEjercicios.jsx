import React, { useState } from 'react';
import '../Filters.scss';
import { Form, Row, Col, Button } from 'react-bootstrap';

//* Componente que muestra los filtros para buscar ejercicios, están deshabilitados
const FilterEjercicios = () => {

  return (
    <div className="filter-bar">
      <Row>
        <Col md={3}>
          <Form.Group controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Introduce el nombre del ejercicio" />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group controlId="musculos">
            <Form.Label>Músculos</Form.Label>
            <Form.Control type="text" placeholder="Introduce los músculos" />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group controlId="grupoMuscular">
            <Form.Label>Grupo Muscular</Form.Label>
            <Form.Control type="text" placeholder="Introduce el grupo muscular" />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group controlId="nivel">
            <Form.Label>Nivel</Form.Label>
            <Form.Control type="text" placeholder="Introduce el nivel" />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Button disabled>Crear nuevo ejercicio</Button>
        </Col>
      </Row>
    </div>
  );
};

export default FilterEjercicios;