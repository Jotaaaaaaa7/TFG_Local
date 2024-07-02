import React, { useEffect, useState } from 'react';
import { getRoutineWithExercises, updateRutina, createRutina, deleteRutina } from '../../Api_Calls/Rutinas';
import { getEjercicios } from '../../Api_Calls/Ejercicios';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import './RutinasCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

//* Componente que muestra una tarjeta con la información de una rutina
const RutinaCard = ({ routineId, rutina: rutinaProp, isNew, rutinas, setRutinas }) => {

  //* Estados
  const [rutina, setRutina] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isEditing, setIsEditing] = useState(isNew);
  const [exercises, setExercises] = useState([]);

  //* Efecto para obtener la rutina y los ejercicios
  useEffect(() => {
    if (routineId) {
      getRoutineWithExercises(routineId)
        .then(data => setRutina(data))
        .catch(error => console.error(error));
    } else if (rutinaProp) {
      setRutina(rutinaProp);
    }
    getEjercicios()
      .then(data => setExercises(data))
      .catch(error => console.error(error));
  }, [routineId, rutinaProp]);

  //* Función para editar la rutina
  const handleEdit = () => {
    setIsEditing(!isEditing);
  }

  //* Función para mostrar el vídeo de un ejercicio
  const handleShow = (video) => {
    setSelectedVideo(video);
    setShowModal(true);
  }

  //* Función para cerrar el modal
  const handleClose = () => {
    setShowModal(false);
  }

  //* Función para añadir un ejercicio a la rutina
  const handleAddExercise = () => {
    setRutina(prevRutina => ({
      ...prevRutina,
      ejercicios: [...prevRutina.ejercicios, { nombre: '', series: '', reps: '', comment: '', video: '' }]
    }));
  };

  //* Función para manejar los cambios en los ejercicios
  const handleExerciseChange = (index, field, value) => {
    console.log(index, field, value);
    setRutina(prevRutina => {
      const newExercises = [...prevRutina.ejercicios];
      const exercise = exercises.find(e => e.nombre === value);
      newExercises[index][field] = value;
      if (exercise) {
        newExercises[index]['video'] = exercise.video;
      }
      return { ...prevRutina, ejercicios: newExercises };
    });
  };

  //* Función para eliminar un ejercicio de la rutina
  const handleDelete = (index) => {
    setRutina(prevRutina => ({
      ...prevRutina,
      ejercicios: prevRutina.ejercicios.filter((_, i) => i !== index)
    }));
  };

  //* Función para eliminar una rutina
  const handleDeleteRoutine = async (id) => {
    try {
      await deleteRutina(id);
      setRutinas(rutinas.filter(rutina => rutina.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  //* Función para guardar la rutina
  const handleSave = async () => {
    try {
      const updatedRutina = {
        nombre: rutina.nombre,
        descripcion: rutina.descripcion,
        ejercicios: rutina.ejercicios.map(ejercicio => ({
          nombre: ejercicio.nombre,
          series: ejercicio.series,
          repeticiones: ejercicio.reps,
          comment: ejercicio.comment
        }))
      };

      let response;
      if (isNew) {
        response = await createRutina(updatedRutina);
      } else {
        response = await updateRutina(routineId, updatedRutina);
      }
    } catch (error) {
      console.error(error);
    }
    setIsEditing(false);
  };

  //* Si la rutina no está cargada, se muestra un mensaje de carga
  if (!rutina) {
    return <div>Cargando...</div>;
  }

  //* Se obtienen los ejercicios que no están seleccionados
  const selectedExerciseNames = rutina.ejercicios.map(ejercicio => ejercicio.nombre);
  const availableExercises = exercises.filter(e => !selectedExerciseNames.includes(e.nombre));

  return (
    <Card className='Card'>
      <Card.Header className='Card-Header text-center' as="h3">
        {isEditing ? (
          <>
            <Form.Label>Nombre de la rutina</Form.Label>
            <FormControl
              type="text"
              className='Card-Text'
              value={rutina.nombre}
              onChange={e => setRutina(prevRutina => ({ ...prevRutina, nombre: e.target.value }))}
            />
          </>
        ) : (
          <p>{rutina.nombre}</p>
        )}
      </Card.Header>
      <Card.Body className='Card-Body'>
        {isEditing ? (
          <>
            <Form.Label><b>Descripción de la rutina</b></Form.Label>
            <FormControl
              as="textarea"
              className='Card-Text'
              value={rutina.descripcion}
              onChange={e => setRutina(prevRutina => ({ ...prevRutina, descripcion: e.target.value }))}
            />
          </>
        ) : (
          <p>{rutina.descripcion}</p>
        )}
        <Table className='Ejercicios-Rutina-Table' striped bordered hover>
          <thead>
            <tr>
              <th>Vídeo</th>
              <th>Nombre</th>
              <th>Series</th>
              <th>Reps</th>
              <th>Comentario</th>
            </tr>
          </thead>
          <tbody>
            {rutina.ejercicios.map((ejercicio, index) => (
              <tr key={index}>
                <td>
                  <Button variant="primary" onClick={() => handleShow(ejercicio.video)} className="round-button">
                    <FontAwesomeIcon icon={faPlay} />
                  </Button>
                </td>
                <td>
                  {isEditing ? (
                    <Select
                      className='Card-Text'
                      classNamePrefix="select"
                      defaultValue={{ value: ejercicio.nombre, label: ejercicio.nombre }}
                      options={availableExercises.map(e => ({ value: e.nombre, label: e.nombre }))}
                      isSearchable
                      isClearable
                      onChange={option => handleExerciseChange(index, 'nombre', option ? option.value : '')}
                    />
                  ) : (
                    <p>{ejercicio.nombre}</p>
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <Form.Control type="number" className='Card-Text' defaultValue={ejercicio.series} min={1} onChange={e => handleExerciseChange(index, 'series', e.target.value)} />
                  ) : (
                    <p>{ejercicio.series}</p>
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <Form.Control type="number" className='Card-Text' defaultValue={ejercicio.reps} min={1} onChange={e => handleExerciseChange(index, 'reps', e.target.value)} />
                  ) : (
                    <p>{ejercicio.reps}</p>
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <FormControl type='text' as="textarea" className='Card-Text' defaultValue={ejercicio.comment} onChange={e => handleExerciseChange(index, 'comment', e.target.value)} />
                  ) : (
                    <p>{ejercicio.comment}</p>
                  )}
                </td>
                <td><button className="btn btn-danger" disabled={!isEditing} onClick={() => handleDelete(index)}>Eliminar</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
        {isEditing && <button id='addExerciseBtn' className="btn btn-primary" onClick={handleAddExercise}>Añadir ejercicio</button>}
        <button id='saveRutinaBtn' className={!isEditing ? "btn btn-primary" : "btn btn-success"} onClick={!isEditing ? handleEdit : handleSave}>{isEditing ? (isNew ? 'Crear' : 'Guardar') : 'Editar'}</button>
        <button id='deleteRutinaBtn' className="btn btn-danger" onClick={isNew ? () => window.location.reload() : () => handleDeleteRoutine(routineId)}>{isNew ? 'Cancelar' : 'Borrar Rutina'}</button>
      </Card.Body>

      <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName="modal-90w"
        centered
        className="Modal"
      >
        <div className='Modal-content'>
          <Modal.Header closeButton className="modal-header">
            <Modal.Title className="modal-title">Vídeo del ejercicio</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <video src={selectedVideo} controls autoPlay className="video" />
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button variant="secondary" onClick={handleClose} className="btn-secondary">
              Cerrar
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </Card>
  );
};

export default RutinaCard;