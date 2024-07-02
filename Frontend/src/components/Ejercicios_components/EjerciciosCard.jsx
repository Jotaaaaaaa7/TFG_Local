import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './EjerciciosCard.scss';
import nullImage from '../../../public/default-exercise.jpg';
import { getMusclesFromExercise, deleteEjercicio } from '../../Api_Calls/Ejercicios';
import { useState, useEffect } from 'react';

//* Componente que muestra un ejercicio en forma de tarjeta
const EjerciciosCard = ({ ejercicio, onDelete }) => {

  //* Estados
  const [isDeleting, setIsDeleting] = useState(false);
  const [musculos, setMusculos] = useState([]);

  //* Expresión regular para comprobar si la URL es válida
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  //* Efecto para obteenr los músculos principales del ejercicio
  useEffect(() => {
    getMusclesFromExercise(ejercicio.id).then(setMusculos);
  }, [ejercicio.id]);

  //* Función para eliminar un ejercicio, está deshabilitada
  const handleDelete = async () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este ejercicio?')) {
      setIsDeleting(true);
      try {
        console.log(ejercicio.id);
        await deleteEjercicio(ejercicio.id);
        onDelete(ejercicio.id);
      } catch (error) {
        console.error(error);
      } finally {
        setIsDeleting(false);
      }
    }
  };
  if (isDeleting) {
    return null;
  }

  return (
    <Card className="EjerciciosCard" key={ejercicio.id}>
      {urlRegex.test(ejercicio.video) ? (
        <video className="card-img-top" controls>
          <source src={ejercicio.video} type="video/mp4" />
          Su navegador no soporta el elemento de video.
        </video>
      ) : (
        <Card.Img className="card-img-top" variant="top" src={nullImage} />
      )}
      <Card.Body className="card-body">
        <Card.Title className="card-title">{ejercicio.nombre}</Card.Title>
        <Card.Text className="card-text">
          <b>Nivel:</b> {ejercicio.nivel}<br /><br />
          <b>Equipamiento necesario:</b> {ejercicio.equipo}<br /><br />
          <b>Músculos principales:</b><br /> {musculos.join(', ')}
        </Card.Text>
        <a href={ejercicio.descripcion} target="_blank" rel="noreferrer">
          <Button className="btn-primary" variant="primary">Show</Button>
        </a>
        <Button className="btn-danger" variant="danger" onClick={handleDelete} disabled >Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default EjerciciosCard;