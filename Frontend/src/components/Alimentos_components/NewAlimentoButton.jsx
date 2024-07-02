import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { createAlimento } from '../../Api_Calls/Alimentos';

//* Componente que muestra el botón y el Modla para crear un nuevo alimento
const NewAlimentoButton = () => {

  //* Estado para controlar si el modal está abierto o cerrado y para almacenar los datos del nuevo alimento
  const [show, setShow] = useState(false);
  const [newAlimento, setNewAlimento] = useState({
    nombre: '',
    prot: '',
    carbs: '',
    fat: '',
    kcal: '',
    precio: '',
    isVegan: false,
    GlutenFree: false,
    unidad: '',
    categoria: '',
  });

  //* Función para manejar los cambios en los campos del nuevo alimento
  const handleNewAlimentoChange = (value, field) => {
    setNewAlimento({ ...newAlimento, [field]: value });
  };

  //* Funciones para abrir y cerrar el modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //* Función para guardar el nuevo alimento en la base de datos
  const handleSave = () => {
    createAlimento(newAlimento);
    setNewAlimento({
      nombre: '',
      prot: '',
      carbs: '',
      fat: '',
      kcal: '',
      precio: '',
      isVegan: false,
      GlutenFree: false,
      unidad: '',
      categoria: '',
    });
    handleClose();
    window.location.reload();
  };

  return (
    <>
      <Button className='ButtonToCreate' onClick={handleShow}>Crear nuevo alimento</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo alimento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" value={newAlimento.nombre} onChange={(e) => handleNewAlimentoChange(e.target.value, 'nombre')} />
            </Form.Group>
            <Form.Group controlId="prot">
              <Form.Label>Proteínas</Form.Label>
              <Form.Control type="number" value={newAlimento.prot} onChange={(e) => handleNewAlimentoChange(e.target.value, 'prot')} />
            </Form.Group>
            <Form.Group controlId="carbs">
              <Form.Label>Carbohidratos</Form.Label>
              <Form.Control type="number" value={newAlimento.carbs} onChange={(e) => handleNewAlimentoChange(e.target.value, 'carbs')} />
            </Form.Group>
            <Form.Group controlId="fat">
              <Form.Label>Grasas</Form.Label>
              <Form.Control type="number" value={newAlimento.fat} onChange={(e) => handleNewAlimentoChange(e.target.value, 'fat')} />
            </Form.Group>
            <Form.Group controlId="kcal">
              <Form.Label>Calorías</Form.Label>
              <Form.Control type="number" value={newAlimento.kcal} onChange={(e) => handleNewAlimentoChange(e.target.value, 'kcal')} />
            </Form.Group>
            <Form.Group controlId="precio">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" value={newAlimento.precio} onChange={(e) => handleNewAlimentoChange(e.target.value, 'precio')} />
            </Form.Group>
            <br />
            <Form.Group controlId="isVegan">
              <Form.Check
                type="checkbox"
                label="Vegano"
                checked={newAlimento.isVegan}
                onChange={(e) => handleNewAlimentoChange(e.target.checked, 'isVegan')}
              />
              <br />
            </Form.Group>
            <Form.Group controlId="GlutenFree">
              <Form.Check
                type="checkbox"
                label="Gluten Free"
                checked={newAlimento.GlutenFree}
                onChange={(e) => handleNewAlimentoChange(e.target.checked, 'GlutenFree')}
              />
              <br />
            </Form.Group>
            <Form.Group controlId="unidad">
              <Form.Label>Unidad</Form.Label>
              <Form.Control type="number" value={newAlimento.unidad} onChange={(e) => handleNewAlimentoChange(e.target.value, 'unidad')} />
            </Form.Group>
            <Form.Group controlId="categoria">
              <Form.Label>Categoría</Form.Label>
              <Form.Control type="text" value={newAlimento.categoria} onChange={(e) => handleNewAlimentoChange(e.target.value, 'categoria')} />
            </Form.Group>
            {/* ... */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewAlimentoButton;