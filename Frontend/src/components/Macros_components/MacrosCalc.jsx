import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './MacrosCalc.scss';
import { getMacros } from './getMacros.js';

//* Componente que muestra el formulario para calcular los macronutrientes
const MacrosCalc = () => {

  //* Estados
  const [macros, setMacros] = useState(null);
  const [form, setForm] = useState({
    sexo: 'masculino',
    edad: '',
    peso: '',
    altura: '',
    nivelActividad: 'sedentario',
    objetivo: 'mantener-peso'
  });

  //* Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  //* Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = getMacros();
    setMacros(result);
  }

  //* Función para guardar los resultados en el localStorage
  const handleSave = () => {
    localStorage.setItem('macros', JSON.stringify(macros));
    console.log('Resultados guardados en localStorage: ' + localStorage.getItem('macros'));

  };

  return (
    <div id='MacrosInterface' className="container mt-5">
      <Form id='MacrosCalc' onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="sexo"><b>Sexo:</b></Form.Label>
          <Form.Select id="sexo" name="sexo" className="form-select" onChange={handleChange}>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="edad"><b>Edad:</b></Form.Label>
          <Form.Control type="number" id="edad" name="edad" min="1" className="form-control" value={form.edad} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="peso"><b>Peso (kg):</b></Form.Label>
          <Form.Control type="number" id="peso" name="peso" min="1" className="form-control" value={form.peso} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="altura"><b>Altura (cm):</b></Form.Label>
          <Form.Control type="number" id="altura" name="altura" min="1" className="form-control" value={form.altura} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="nivel-actividad"><b>Nivel de actividad:</b></Form.Label>
          <Form.Select id="nivel-actividad" name="nivel-actividad" className="form-select" onChange={handleChange}>
            <option value="sedentario">Sedentario</option>
            <option value="ligero">Ligero</option>
            <option value="moderado">Moderado</option>
            <option value="activo">Activo</option>
            <option value="muy-activo">Muy Activo</option>
            <option value="muy-activo">Extremadamente Activo</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="objetivo"><b>Objetivo:</b></Form.Label>
          <Form.Select id="objetivo" name="objetivo" className="form-select" onChange={handleChange}>
            <option value="mantener-peso">Mantener peso</option>
            <option value="perder-peso">Perder peso</option>
            <option value="perder-peso-rapido">Perder peso rápido</option>
            <option value="ganar-peso">Ganar peso</option>
            <option value="ganar-peso-rapido">Ganar peso rápido</option>
          </Form.Select>
        </Form.Group>
        <Button id='CalcularMacrosBtn' type="submit" className="btn btn-primary">Calcular</Button>
        <Button id='GuardarBtn' onClick={handleSave} className="btn btn-secondary">Guardar Resultados</Button>
        <div id="results" className="mt-4">
          {/*Aquí se verán los resulatdos */}
        </div>
      </Form>
    </div>
  );
};

export default MacrosCalc
