import './button.css';
import React from 'react';

const Button = ({ onButtonClick }) => {
  return (
    <div className='button-container'>
      <button className='contacts-btn btn' onClick={() => onButtonClick('Contacts')}>Contacts</button>
      <button className='projects-btn btn' onClick={() => onButtonClick('Projects')}>Projects</button>
      <button className='skills-btn btn' onClick={() => onButtonClick('Skills')}>Skills</button>
      <button className='about-btn btn' onClick={() => onButtonClick('About')}>About</button>
    </div>
  );
};

export default Button;
