import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Sports Facalities!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cricket.jpg'
              text='In cricket, as in life, you need to play the ball late.'
              label='Cricket'
              path='/services'
            />
            <CardItem
              src='images/football.jpg'
              text='Keep calm and play football.'
              label='Football'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/tennis.jpg'
              text='The court is my kingdom.'
              label='Tennis'
              path='/services'
            />
            <CardItem
              src='images/basketball.jpg'
              text='Baketball is a beautiful game.'
              label='Basketball'
              path='/products'
            />
            <CardItem
              src='images/vollyball.jpg'
              text='Set the bar high, play vollyball.'
              label='Vollyball'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
