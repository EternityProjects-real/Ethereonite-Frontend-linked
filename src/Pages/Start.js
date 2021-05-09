import React from 'react';
import Cards from '../Components/Cards/StarterCards';
import logo from '../Assets/logo.png';
import './Start.css';

function Start() {
  return (
    <>
      <div className='main-start'>
      <img src={logo} className='welcome-ethereonite'/>
      <div className='welcome-start'>Welcome to Ethereonite</div>
      <div className='start-grid'>
      <Cards Title='Dapp' Content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem erat, ullamcorper at sagittis quis, porta quis tellus. In gravida at justo porta lacinia. Nullam lobortis, velit vel elementum condimentum, nisl elit lobortis enim, ultrices tincidunt nulla velit sit amet ex. Donec et ligula nec ante ultricies cursus at ac nisl.'/>
      <Cards Title='NFT' Content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem erat, ullamcorper at sagittis quis, porta quis tellus. In gravida at justo porta lacinia. Nullam lobortis, velit vel elementum condimentum, nisl elit lobortis enim, ultrices tincidunt nulla velit sit amet ex. Donec et ligula nec ante ultricies cursus at ac nisl.'/>
      <Cards Title='Crowd Fund' Content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem erat, ullamcorper at sagittis quis, porta quis tellus. In gravida at justo porta lacinia. Nullam lobortis, velit vel elementum condimentum, nisl elit lobortis enim, ultrices tincidunt nulla velit sit amet ex. Donec et ligula nec ante ultricies cursus at ac nisl.'/>
      </div>
      </div>
    </>
  );
}

export default Start;