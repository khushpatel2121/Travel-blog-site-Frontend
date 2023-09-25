import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Sport from "../assets/sports.mp4"
import { useSelector } from 'react-redux';

function HeroSection() {

  const {currentUser} = useSelector((state)=>state.user)

  return (
    <div className='hero-container'>
      <video src={Sport} autoPlay loop muted />
      <h1>Book N play</h1>
      <p>Never Compromise on Playtime</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
