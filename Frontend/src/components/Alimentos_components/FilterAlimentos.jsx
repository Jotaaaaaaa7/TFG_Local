import React, { useState } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import '../Filters.scss';

//* Componente que muestra los filtros para buscar alimentos
const FilterAlimentos = () => {

  return (
    <div className="filter-bar">
      <Row>
        <Col md={2}>
          <Form.Group controlId="search">
            <Form.Control type="text" placeholder="Buscar por nombre" />
          </Form.Group>
        </Col>
        <Col md={1}> </Col>
        <Col md={2}>
          <Form.Group controlId="maxPrice">
            <Form.Label>Precio máximo: </Form.Label>
            <Form.Range />
          </Form.Group>
        </Col>
        <Col md={1}> </Col>
        <Col md={2}>
          <Form.Group controlId="categoria">
            <Form.Control type="text" placeholder="Buscar por categoría" />
          </Form.Group>
        </Col>
        <Col md={1}> </Col>
        <Col md={2}>
          <Form.Group controlId="vegan">
            <Form.Check type="checkbox" label="Vegano" />
          </Form.Group>
          <Form.Group controlId="glutenFree">
            <Form.Check type="checkbox" label="Gluten Free" />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default FilterAlimentos;