import React, { useState, useEffect } from 'react';
import Button from './components/button';
import Loader from './components/loader';

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
    <div>
      <h1>My Portfolio</h1>
      <Button onButtonClick={handleButtonClick} />
      <div>
        {selectedSection && <h2>{selectedSection} Section</h2>}
      </div>
    </div>
  );
};

export default App;
