import React from 'react';
import Card from '../card/card.component';
import { useSelector } from 'react-redux';
import './cards.styles.css';

const Cards = () => { // * se pondran las propiedades del back después
  // console.log('Cards component received pokemons:', pokemons); //// Debugging log
  const items = useSelector(state => state.items);
  return (
    <div className="cards-container">
      {items.map((pet) => {
        return (
          <Card
            key={pet.id}
            id={pet.id}
            name={pet.name}
            image={pet.image}
            condition= {pet.condition}
          />
        )
      })}
    </div>
  );
};

export default Cards;
