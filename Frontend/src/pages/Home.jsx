import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Home.scss'
import 'boxicons/css/boxicons.min.css';

//* Página principal de la aplicación donde se explica el contenido de cada página
const PaginaPrincipal = () => {
  return (
    <>
      <div className='pagina-principal'>
      <div className='explain'>
      <h1>Página de presentación</h1>
        <h4>Aquí se presentan las diferentes páginas de nuestra aplicación y se explica lo que podemos encontrar en cada una de ellas</h4>
      </div>
    <Accordion id='presentation' defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><i className="bx bx-math icon homeIcons"></i> <strong>Calculadora de Macronutrientes: </strong></Accordion.Header>
        <Accordion.Body>
        En esa página encontramos una calculadora de macronutrientes, donde el usuario puede añadir sus datos y según su objetivo,
            se le calcularán las necesiades nutricionales, así como informarle sobre su estado actual de salud en función del IMC.<br/><br/> Estos valores nutricionales los podrá almacenar para usarlos posteriormente.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><i className="bx bx-baguette icon homeIcons"></i><strong>Alimentos:</strong></Accordion.Header>
        <Accordion.Body>
        En esta página podemos ver todos los alimentos almacenados en la base de datos.<br/><br/> Desde esta tabla podemos ver todas las propiedades de los alimentos, así como modificarlos, crear nuevos alimentos o eliminarlos.<br/><br/>
            Para crear un nuevo aliemntos hay que hacer click en el botón "Crear nuevo alimento" y aparecerá un modal para dicha tarea.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><i className="bx bx-bowl-hot icon homeIcons"></i><strong>Recetas:</strong></Accordion.Header>
        <Accordion.Body>
        En esta página podemos ver todas las recetas almacenadas en la base de datos, así como sus valores nutricionales, precio y si son aptas para veganos y celíacos.<br/><br/>
            Si hacemos click en "Crear nueva receta" o en "Show/Edit", accedemos a una página para crear ó editar la recetas, pudiendo ver de manera dinámica sus valores
            nutricionales, en función de los ingredientes elegidos y las cantidades de los mismos.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><i className="bx bx-dumbbell icon homeIcons"></i><strong>Ejercicios:</strong></Accordion.Header>
        <Accordion.Body>
        Aquí podemos ver todos los ejercicios de la base de datos, así como un vídeo explicativo, los músculos implicados y su nivel de dificultad.<br/><br/>
            Si hacemos click en "Show" nos llevará a una página con más información sobre el ejercicio. de esta página he obtenido la información de todos los ejercicios disponibles en la aplicación.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><i className="bx bx-book-heart icon homeIcons"></i><strong>Rutinas:</strong></Accordion.Header>
        <Accordion.Body>
        Aquí podemos ver todas las rutinas diarias de entrenamiento almacenadas en la base de datos.<br/><br/> Desde aquí podemos eliminar rutinas, crear nuevas o editar las existentes.<br/><br/> Se nos permite añadir distintos ejercicios
            y establecer el número de series, de repeticiones por serie, así como dejer un comentario para apuntar el peso o lo que quiera el usuario.<br/><br/> Para agilizar el entrenamiento a los principiantes, hay un botón para ver el vídeo del ejercicio elegido.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header><i className="bx bx-bot icon homeIcons"></i><strong>ChatBot:</strong></Accordion.Header>
        <Accordion.Body>
              En esta página encontramos un chatBot en tiempo real que nos permite interactuar con la Api de OpenAI
              y preguntarle cualquier duda que tengamos sobre nutrición, recetas, ejercicios, etc.<br/><br/> Este chatBot nos responderá en tiempo real y nos ayudará a resolver cualquier duda que tengamos.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header><i className="bx bxs-dish icon homeIcons"></i><strong>DietAi:</strong></Accordion.Header>
        <Accordion.Body>
          En esta página encontramos un formualrio para que el usuario pueda generar una dieta con inteligencia artificial.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header><i className="bx bxs-dish icon homeIcons"></i><strong>RecipeAi:</strong></Accordion.Header>
        <Accordion.Body>
          En esta página encontramos un formualrio para que el usuario pueda generar una receta con inteligencia artificial.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header><i className="bx bxs-dish icon homeIcons"></i><strong>WorkoutAi:</strong></Accordion.Header>
        <Accordion.Body>
          En esta página encontramos un formualrio para que el usuario pueda generar una rutina de entrenamiento con inteligencia artificial.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
    </>
  );
}

export default PaginaPrincipal;




