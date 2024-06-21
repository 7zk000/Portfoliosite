import React from 'react';
import './contacts.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Contacts = () => {
  return (
    <div className='contact-container'>
      <div className={`contact-icons`}>
        <a href="https://github.com/7zk000" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github">github</i>
        </a>
        <a href="https://instagram.com/7zk.me" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram">instagram</i>
        </a>
        <a href="https://twitter.com/7zkme" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter">twitter</i>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
