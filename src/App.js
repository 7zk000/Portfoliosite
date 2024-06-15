import React, { useState, useEffect } from 'react';
import Button from './components/button';
import Loader from './components/loader';
import { Contacts, Projects, Skills, About } from './components/pages';

const App = () => {
  const [selectedSection, setSelectedSection] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleButtonClick = (section) => {
    setSelectedSection(section);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div id="particles">
      <h1>My Portfolio</h1>
      <Button onButtonClick={handleButtonClick} />
      <div>
        {selectedSection === 'Contacts' && <Contacts />}
        {selectedSection === 'Projects' && <Projects />}
        {selectedSection === 'Skills' && <Skills />}
        {selectedSection === 'About' && <About />}
      </div>
    </div>
  );
};

export default App;
