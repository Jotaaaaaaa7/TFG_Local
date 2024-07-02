import { Table } from 'react-bootstrap';
import './ImcTable.scss';

//* Tabla con los valores de IMC y su clasificación
const ImcTable = () => {

  return (
    <div id='ImcTable' className="mt-4 aside-right">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>IMC</th>
            <th>Clasificación</th>
          </tr>
        </thead>
        <tbody>
          <tr id='lowRow'>
            <td className='bad'>18.5 o menos</td>
            <td className='bad'>Bajo peso</td>
          </tr>
          <tr id='normalRow'>
            <td className='good'>18.5 - 25</td>
            <td className='good'>Peso normal</td>
          </tr>
          <tr id='highRow'>
            <td className='medium'>25 - 27</td>
            <td className='medium'>Sobrepeso I</td>
          </tr>
          <tr id='highRow2'>
            <td className='medium'>27 - 30</td>
            <td className='medium'>Sobrepeso II (preobesidad)</td>
          </tr>
          <tr id='fat1Row'>
            <td className='bad'>30 - 35</td>
            <td className='bad'>Obesidad clase I (leve)</td>
          </tr>
          <tr id='fat2Row'>
            <td className='bad'>35 - 40</td>
            <td className='bad'>Obesidad clase II (moderada)</td>
          </tr>
          <tr id='fat3Row'>
            <td className='bad'>40-50</td>
            <td className='bad'>Obesidad clase III (mórbida)</td>
          </tr>
          <tr id='fat4Row'>
            <td className='bad'>50 o más</td>
            <td className='bad'>Obesidad clase IV (extrema)</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ImcTable;