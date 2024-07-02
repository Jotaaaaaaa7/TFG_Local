import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './NavBar.css';
import 'boxicons/css/boxicons.min.css';
import logo from './nootric-logo.png';

//* Componente que muestra la barra de navegación lateral
const NavBar = ({ isOpen, setIsOpen }) => {

  //* Efecto para abrir y cerrar la barra de navegación
  useEffect(() => {
    const toggle = document.querySelector('.toggle');

    toggle.onclick = function () {
      setIsOpen(prevState => !prevState);
    }
  }, [setIsOpen]);

  return (
    <nav className={`sidebar ${isOpen ? '' : 'close'}`}>
      <header>
        <div className="image-text">
          <span className="image" style={{ width: '20px', height: '20px' }}>
            <img src={logo} alt="logo" style={{ width: '60px', height: '60px' }} />
          </span>
          <div className="text header-text">
            <span className="name" style={{ marginLeft: '10px' }}>Juan Gonzalo</span>
            <span className="name" style={{ marginLeft: '10px' }}>Martínez Rubio</span>
            <span className="profession" style={{ marginLeft: '10px' }}>TFG</span>
          </div>
        </div>
        <i className='bx bx-chevron-right toggle'></i>
      </header>
      <div className="menu-bar">
        <ul className="menu-links">
          <li className="nav-link">
            <Link to="/Home" title='Home'>
              <i className="bx bxs-home icon"></i>
              <span className="text nav-text">Home</span>
            </Link>
          </li>
          <br />
          <li className="nav-link">
            <Link to="/Calculadora" title='Macros'>
              <i className="bx bx-math icon"></i>
              <span className="text nav-text">Macros</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/Alimentos" title='Alimentos'>
              <i className="bx bx-baguette icon"></i>
              <span className="text nav-text">Alimentos</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="Recetas" title='Recetas'>
              <i className="bx bx-bowl-hot icon"></i>
              <span className="text nav-text">Recetas</span>
            </Link>
          </li>
          <br />
          <li className="nav-link">
            <Link to="Ejercicios" title='Ejercicios'>
              <i className="bx bx-dumbbell icon"></i>
              <span className="text nav-text">Ejercicios</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="Rutinas" title='Rutinas'>
              <i className="bx bx-book-heart icon"></i>
              <span className="text nav-text">Rutinas</span>
            </Link>
          </li>
          <br />
          <li className="nav-link">
            <Link to="/Assistant" title='ChatBot'>
              <i className="bx bx-bot icon"></i>
              <span className="text nav-text">Asistente</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="DietAI" title='DietAi'>
              <i className="bx bxs-dish icon"></i>
              <span className="text nav-text">DietAI</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="RecipeAI" title='RecipeAi'>
              <i className="bx bxs-dish icon"></i>
              <span className="text nav-text">RecipeAI</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="WorkoutAI" title='WorkoutAi'>
              <i className="bx bxs-dish icon"></i>
              <span className="text nav-text">WorkoutAI</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;