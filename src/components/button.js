import './button.css';
import React from 'react';

const Button = ({ onButtonClick }) => {
  return (
    <div className='button-container'>
      <button className='btn' onClick={() => onButtonClick('Contacts')}>Contacts</button>
      <button className='btn' onClick={() => onButtonClick('Projects')}>Projects</button>
      <button className='btn' onClick={() => onButtonClick('Skills')}>Skills</button>
      <button className='btn' onClick={() => onButtonClick('About')}>About</button>
    </div>
  );
};

export default Button;
