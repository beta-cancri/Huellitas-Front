import React from 'react';
import { useNavigate } from 'react-router-dom';
import './card.styles.css';

const Card = () => {            //luego se pondrán las propiedades del back
const navigate = useNavigate();

return (
  <div className='card' onClick={() => navigate('/detail')}>
    <h2 className='pokemon-name'>Dustin</h2>
    <img src="https://www.mascotas.com/uploads/Upload_5d1b9f3e0bff1_02072019.jpeg" alt="imagen de muestra" />
    <h2>Condición: saludable </h2>
  </div>
)


};

export default Card;
