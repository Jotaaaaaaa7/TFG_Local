
import MacrosCalc from '../components/Macros_components/MacrosCalc.jsx'
import ImcTable from '../components/Macros_components/ImcTable.jsx'
import SavedResultsDiv from '../components/Macros_components/SavedResultsDiv.jsx'
import { Container, Row, Col } from 'react-bootstrap';

//* Página que muestra la calculadora de macronutrientes
const Macros = () => {
  return (
    <Container>
      <Row>
        <Container className="mt-4 text-center">
          <h1 className="text-center">Calculadora de Macronutrientes</h1>
          <p className="text-center">Introduce tus datos para calcular tus necesidades diarias de macronutrientes.</p>
        </Container>
        <Col md={8}>
          <MacrosCalc />
        </Col>
        <Col md={4} className='mt-5'>
          <ImcTable />
          <SavedResultsDiv />
        </Col>
      </Row>
    </Container>
  )
}

export default Macros;