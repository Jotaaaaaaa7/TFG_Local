import React, { useState } from 'react';
import '../Filters.scss';
import { Form } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

//* Componente que muestra los filtros para buscar recetas, están deshabilitados
const FilterRecipes = () => {

  return (
    <div className="filter-bar">
      <Row>
        <Col md={3} className="m-3">
          <Form.Group controlId="search" >
            {/* <Form.Label>Buscar por nombre</Form.Label> */}
            <Form.Control type="text" placeholder="Buscar por nombre" />
          </Form.Group>
        </Col>
        <Col md={1}></Col>
        <Col md={2} className="m-3">
          <Form.Group controlId="vegan">
            <Form.Check type="checkbox" label="Vegan" />
          </Form.Group>
          <Form.Group controlId="glutenFree">
            <Form.Check type="checkbox" label="Gluten Free" />
          </Form.Group>
        </Col>
        <Col md={1}></Col>
        <Col md={3} className=" m-3">
          <Form.Label>Precio máximo: </Form.Label>
          <Form.Range />
        </Col>
      </Row>
    </div>
  );
};

export default FilterRecipes;