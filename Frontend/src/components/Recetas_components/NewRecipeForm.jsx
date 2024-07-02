import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createReceta } from '../../Api_Calls/Recetas';
import { getAlimentos } from '../../Api_Calls/Alimentos';
import { Row, Col, Container, Table } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import nullImage from '../../../public/default-recipe.jpg';
import Select from 'react-select';
import Alert from 'react-bootstrap/Alert';
import 'boxicons/css/boxicons.min.css';

//* Componente que muestra el formulario para crear una nueva receta
const NewRecipeForm = () => {

  //* Estados
  const [receta, setReceta] = useState({ nombre: '', descripcion: '', foto: '' });
  const [ingredientes, setIngredientes] = useState([{ id_alimento: null, cantidad: 100 }]);
  const [error, setError] = useState(null);
  const [alimentos, setAlimentos] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  //* Hook para navegar entre páginas
  const navigate = useNavigate();

  //* Efecto para obtener los alimentos
  useEffect(() => {
    getAlimentos()
      .then((data) => {
        setAlimentos(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //* Función para enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      nombre: receta.nombre,
      descripcion: receta.descripcion,
      foto: receta.foto,
      ingredientes: ingredientes.map(ingrediente => {
        const alimentoSeleccionado = alimentos.find(alimento => alimento.id === ingrediente.id_alimento);
        return {
          nombre: alimentoSeleccionado ? alimentoSeleccionado.nombre : '',
          cantidad: ingrediente.cantidad,
        };
      }),
    };
    console.log(data);
    createReceta(data)
      .then(() => {
        navigate(`/recetas`);
        setShowAlert(true);
      })
      .catch(error => {
        setError(error);
      });
  };

  //* Si hay un error, muestra un mensaje de error
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  //* Expresión regular para comprobar si la URL es válida
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  //* Función para calcular el total de proteínas, carbohidratos, grasas, kcal y precio
  const calcularTotal = (propiedad) => parseFloat(ingredientes.reduce((total, ingrediente) => {
    const alimento = alimentos.find(alimento => alimento.id === ingrediente.id_alimento);
    return total + (alimento ? alimento[propiedad] * ingrediente.cantidad / 100 : 0);
  }, 0).toFixed(1));

  //* Calcula el total de proteínas, carbohidratos, grasas, kcal y precio
  const totalProteinas = calcularTotal('prot');
  const totalCarbohidratos = calcularTotal('carbs');
  const totalGrasas = calcularTotal('fat');
  const totalKcal = calcularTotal('kcal');
  const totalPrecio = calcularTotal('precio');

  return (
    <Container className=" justify-content-center align-items-center " style={{ marginBlockEnd: '300px', marginTop: '50px' }}>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="espacio-vertical" controlId="foto" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="foto-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Image src={!urlRegex.test(receta.foto) ? nullImage : receta.foto} alt="Foto de la receta" thumbnail />
            <div style={{ marginLeft: '20px' }}>
              <p>Para cambiar la foto, añada una url válida en el input inferior</p>
              <Form.Label><b>Foto</b></Form.Label>
              <Form.Control type="text" value={receta.foto} onChange={(e) => setReceta({ ...receta, foto: e.target.value })} />
            </div>
          </div>
        </Form.Group>
        <br />
        <Form.Group className="espacio-vertical" controlId="nombre">
          <Form.Label><b>Nombre</b></Form.Label>
          <Form.Control type="text" value={receta.nombre} onChange={(e) => setReceta({ ...receta, nombre: e.target.value })} />
        </Form.Group>
        <br />
        <Form.Group className="espacio-vertical" controlId="descripcion">
          <Form.Label><b>Descripción</b></Form.Label>
          <Form.Control as="textarea" rows={receta.descripcion.split('\n').length || 3} value={receta.descripcion} onChange={(e) => setReceta({ ...receta, descripcion: e.target.value })} />
        </Form.Group>
        {/* Aquí puedes agregar campos de formulario para los ingredientes */}
        <h4>Ingredientes:</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className='columna_nombre'>Nombre</th>
              <th className='columna_cantidad'>Cantidad</th>
              <th>Proteinas🥩</th>
              <th>Carbohidratos🍚</th>
              <th>Grasas🥑</th>
              <th>Kcal⚡</th>
              <th>Precio💸</th>
              <th>Vegan</th>
              <th>GlutenFree</th>
            </tr>
          </thead>
          <tbody>
            {ingredientes.map((ingrediente, index) => {
              const alimento = alimentos.find(alimento => alimento.id === ingrediente.id_alimento);
              const selectedIds = ingredientes.map(ing => ing.id_alimento);
              const availableOptions = alimentos.filter(alimento => !selectedIds.includes(alimento.id) || alimento.id === ingrediente.id_alimento);

              return (
                <tr key={index}>
                  <td>
                    <Form.Group controlId={`ingrediente-nombre-${index}`}>
                      <Select
                        value={availableOptions.find(option => option.id === ingrediente.id_alimento) || ''}
                        onChange={(option) => {
                          const newIngredientes = [...ingredientes];
                          newIngredientes[index] = { ...newIngredientes[index], id_alimento: option ? option.id : null, nombre_alimento: option ? option.label : '' };
                          setIngredientes(newIngredientes);
                        }}
                        options={availableOptions}
                        getOptionLabel={(option) => option ? option.nombre : ''}
                        getOptionValue={(option) => option ? option.id : ''}
                      />
                    </Form.Group>
                  </td>
                  <td>
                    <Form.Group controlId={`ingrediente-cantidad-${index}`}>
                      <Form.Control type="text" value={ingrediente.cantidad} onChange={(e) => {
                        const newIngredientes = [...ingredientes];
                        newIngredientes[index] = { ...newIngredientes[index], cantidad: e.target.value };
                        setIngredientes(newIngredientes);
                      }} />
                    </Form.Group>
                  </td>
                  <td>
                    {alimento ? parseFloat((alimento.prot * ingrediente.cantidad / 100).toFixed(1)) : ''}
                  </td>
                  <td>
                    {alimento ? parseFloat((alimento.carbs * ingrediente.cantidad / 100).toFixed(1)) : ''}
                  </td>
                  <td>
                    {alimento ? parseFloat((alimento.fat * ingrediente.cantidad / 100).toFixed(1)) : ''}
                  </td>
                  <td>
                    {alimento ? parseFloat((alimento.kcal * ingrediente.cantidad / 100).toFixed(1)) : ''}
                  </td>
                  <td>
                    {alimento ? parseFloat((alimento.precio * ingrediente.cantidad / 100).toFixed(1)) + '€' : ''}
                  </td>
                  <td>
                    {alimento ? (alimento.isVegan ? '✅' : '❌') : ''}
                  </td>
                  <td>
                    {alimento ? (alimento.GlutenFree ? '✅' : '❌') : ''}
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => {
                      const newIngredientes = [...ingredientes];
                      newIngredientes.splice(index, 1);
                      setIngredientes(newIngredientes);
                    }}>Eliminar</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button variant="success" onClick={() => setIngredientes([...ingredientes, { id_alimento: null, cantidad: 100 }])}>Añadir ingrediente</Button>
        <div className="MacrosTot">
          <p><b>Resultados:</b></p>
          <p><strong>🥩</strong> {totalProteinas} gr</p>
          <p><strong>🍚</strong> {totalCarbohidratos} gr</p>
          <p><strong>🥑</strong> {totalGrasas} gr</p>
          <p><strong>⚡</strong> {totalKcal} kcal</p>
          <p><strong>💸</strong> {totalPrecio} €</p>
        </div>
        <Row>
          <Col md={2}>
            <Button variant="primary" type="submit">Guardar</Button>
            <br />
            <Link to={`/recetas`}>
              <Button id='volverBtn' variant="primary" type="button">
                <i className='bx bx-arrow-back'></i>
              </Button>
            </Link>
          </Col>
          <Col md={10}>
            {showAlert && (
              <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                Receta actualizada correctamente
              </Alert>
            )}
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default NewRecipeForm;