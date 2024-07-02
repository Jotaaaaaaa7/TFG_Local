import './TablaAlimentos.scss';
import { Table, Container, Row, Col, Button, Form } from 'react-bootstrap';
import { getAlimentos, deleteAlimento, updateAlimento, getCategorias } from '../../Api_Calls/Alimentos';
import { useEffect, useState } from 'react';
import PaginationComponent from '../Pagination';

//* Componente que muestra una tabla con todos los alimentos
const TablaAlimentos = () => {

  //* Estados
  const [alimentos, setAlimentos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedAlimento, setEditedAlimento] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  //* Nº de alimentos por página
  const itemsPerPage = 20;

  //* Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //* Efecto para obtener los alimentos y las categorías de alimentos
  useEffect(() => {
    getAlimentos()
      .then((data) => {
        setAlimentos(data);
      })
      .catch((error) => {
        console.error(error);
      });

    getCategorias()
      .then((data) => {
        setCategorias(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //* Calcula el índice del primer y último elemento en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  //* Obtiene los elementos para la página actual
  const currentItems = alimentos.slice(indexOfFirstItem, indexOfLastItem);

  //* Calcula el número total de páginas
  const totalPages = Math.ceil(alimentos.length / itemsPerPage);


  //* Función para eliminar un alimento
  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este alimento?')) {
      deleteAlimento(id)
        .then(() => {
          setAlimentos(alimentos.filter(alimento => alimento.id !== id));
          console.log('Alimento eliminado con éxito');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  //* Función para editar un alimento
  const handleEdit = (alimento) => {
    setEditingId(alimento.id);
    console.log(alimento);
    setEditedAlimento({
      ...alimento,
      unidad: alimento.unidad || '',
      categoria: alimento.categoria_id ? categorias.find(categoria => categoria.id === alimento.categoria_id)?.nombre : ''
    });
  };

  //* Función para guardar los cambios en un alimento
  const handleSave = (id) => {
    updateAlimento(id, editedAlimento)
      .then(() => {
        // Actualiza la lista de alimentos después de la actualización
        setAlimentos(alimentos.map(alimento => alimento.id === id ? editedAlimento : alimento));
        setEditingId(null);
        setEditedAlimento(null);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //* Función para manejar los cambios en los campos del alimento editado
  const handleInputChange = (event, field) => {
    setEditedAlimento({ ...editedAlimento, [field]: event.target.value });
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="mx-auto">
            <Table className='TablaAlimentos' striped bordered hover>
              <thead>
                <tr>
                  <th className='ensanchar'>Nombre</th>
                  <th>kcal</th>
                  <th>Proteinas</th>
                  <th>Grasas</th>
                  <th>Carbohidratos</th>
                  <th>Precio €</th>
                  <th>Unidad</th>
                  <th>Vegano</th>
                  <th>GlutenFree</th>
                  <th className='ensanchar'>Categoría</th>
                  <th>✍</th>
                  <th>🗑</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((alimento, index) => (
                  <tr key={index}>
                    {editingId === alimento.id ? (
                      <>
                        <td><Form.Control type="text" value={editedAlimento.nombre} onChange={(e) => handleInputChange(e, 'nombre')} /></td>
                        <td><Form.Control type="number" value={editedAlimento.kcal} onChange={(e) => handleInputChange(e, 'kcal')} /></td>
                        <td><Form.Control type="number" value={editedAlimento.prot} onChange={(e) => handleInputChange(e, 'prot')} /></td>
                        <td><Form.Control type="number" value={editedAlimento.fat} onChange={(e) => handleInputChange(e, 'fat')} /></td>
                        <td><Form.Control type="number" value={editedAlimento.carbs} onChange={(e) => handleInputChange(e, 'carbs')} /></td>
                        <td><Form.Control type="number" value={editedAlimento.precio} onChange={(e) => handleInputChange(e, 'precio')} /></td>
                        <td><Form.Control type="number" min={1} value={editedAlimento.unidad} onChange={(e) => handleInputChange(e, 'unidad')} /></td>
                        <td>
                          <Form.Control as="select" value={editedAlimento.isVegan} onChange={(e) => handleInputChange(e, 'isVegan')}>
                            <option value={true}>Sí</option>
                            <option value={false}>No</option>
                          </Form.Control>
                        </td>
                        <td>
                          <Form.Control as="select" value={editedAlimento.GlutenFree} onChange={(e) => handleInputChange(e, 'GlutenFree')}>
                            <option value={true}>Sí</option>
                            <option value={false}>No</option>
                          </Form.Control>
                        </td>
                        <td>
                          <Form.Control as="select" value={editedAlimento.categoria} onChange={(e) => handleInputChange(e, 'categoria')}>
                            <option value={null}>---</option>
                            {categorias.map((categoria, index) => (
                              <option key={index} value={categoria.nombre}>{categoria.nombre}</option>
                            ))}
                          </Form.Control>
                        </td>
                        <td>
                          <div title='Guardar'>
                            <Button variant='success' onClick={() => handleSave(alimento.id)}>Guardar</Button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td><b>{alimento.nombre}</b></td>
                        <td>{alimento.kcal}</td>
                        <td>{alimento.prot}</td>
                        <td>{alimento.fat}</td>
                        <td>{alimento.carbs}</td>
                        <td>{alimento.precio}</td>
                        <td>{alimento.unidad ? alimento.unidad : '---'}</td>
                        <td>{alimento.isVegan ? '✅' : '❌'}</td>
                        <td>{alimento.GlutenFree ? '✅' : '❌'}</td>
                        <td>{alimento.categoria_id ? categorias.find(categoria => categoria.id === alimento.categoria_id)?.nombre : '---'}</td>
                        <td>
                          <div title='Editar'>
                            <Button variant='success' onClick={() => handleEdit(alimento)}>Editar</Button>
                          </div>
                        </td>
                      </>
                    )}
                    <td>
                      <div title='Eliminar'>
                        <Button variant='danger' onClick={() => handleDelete(alimento.id)}>Eliminar</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <PaginationComponent totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TablaAlimentos;