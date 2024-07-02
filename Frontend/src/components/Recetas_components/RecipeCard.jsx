import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './RecipeCard.scss';
import nullImage from '../../../public/default-recipe.jpg';
import { Link } from 'react-router-dom';
import { deleteReceta } from '../../Api_Calls/Recetas';
import { useState } from 'react';

//* Componente que muestra una tarjeta con la información de una receta
const RecipeCard = ({ receta, onDelete }) => {

  //* Estado
  const [isDeleting, setIsDeleting] = useState(false);

  //* Expresión regular para comprobar si la URL es válida
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  //* Función para eliminar una receta
  const handleDelete = async () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta receta?')) {
      setIsDeleting(true);
      try {
        await deleteReceta(receta.id);
        onDelete(receta.id);
      } catch (error) {
        console.error(error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  //* Si se está eliminando, no se muestra nada
  if (isDeleting) {
    return null;
  }

  return (
    <Card className={`RecipeCard ${receta.missing_fields ? 'missing-fields' : ''}`} key={receta.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={!urlRegex.test(receta.foto) ? nullImage : receta.foto} />
      <Card.Body>
        <Card.Title>{receta.nombre ? receta.nombre : <br />}</Card.Title>
        {receta.missing_fields ? (
          <Card.Text>
            1 o más <strong>alimentos</strong> que formaban esta receta han sido <strong>actualizados o eliminados</strong>.
            <br />
            <br />
            Si desea conservar la receta, haga clikc en Edit para <strong>guardarla de nuevo</strong> y que se actualizen sus valores
          </Card.Text>
        ) : (
          <Card.Text>
            🥩: {parseFloat(receta.prot).toFixed(1)} gr<br />
            🍚: {parseFloat(receta.carbs).toFixed(1)} gr<br />
            🥑: {parseFloat(receta.fat).toFixed(1)} gr<br />
            <br />
            ⚡: {parseFloat(receta.kcal).toFixed(1)} kcal<br />
            💸: {parseFloat(receta.precio).toFixed(1)} €
            <br /><br />
            Vegan:{receta.isVegan ? '✅' : '❌'} <br />
            GlutenFree:{receta.GlutenFree ? '✅' : '❌'}
          </Card.Text>
        )}
        <Link to={`/recetas/${receta.id}`}>
          <Button variant="primary">Show/Edit</Button>
        </Link>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;