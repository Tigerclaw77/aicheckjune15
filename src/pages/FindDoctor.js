import React, { useState, useEffect } from 'react';
import ZipCodeModal from '../forms/ZipCodeModal';

function FindDoctor() {
  const [zipCode, setZipCode] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);

  function handleZipCodeSubmit(zipCode) {
    setZipCode(zipCode);
    setIsModalOpen(false);
  }

  return (
    <div>
      {isModalOpen && <ZipCodeModal onZipCodeSubmit={handleZipCodeSubmit} />}
      <h1>Optometrists near {zipCode}</h1>
      <p>Click the button below to search again:</p>
      <button onClick={() => setIsModalOpen(true)}>Change ZIP code</button>
      <OptometristsPage zipCode={zipCode} />
    </div>
  );
}

function OptometristsPage({ zipCode }) {
  const [optometrists, setOptometrists] = useState([]);

  useEffect(() => {
    const apiUrl = `https://example.com/api/optometrists?zip=${zipCode}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(optometrists => setOptometrists(optometrists))
      .catch(error => console.error(error));
  }, [zipCode]);

  // Pagination and max optometrists code omitted for brevity

  return (
    <div>
      <OptometristsList optometrists={optometrists} />
      <p>Click the button below to search again:</p>
      <button onClick={() => setOptometrists([])}>Change ZIP code</button>
    </div>
  );
}

function OptometristsList({ optometrists }) {
  return (
    <div>
      {optometrists.map(optometrist => (
        <div key={optometrist.id} className="optometrist">
          <h3>{optometrist.name}</h3>
          <p>{optometrist.address}</p>
          <p>{optometrist.phone}</p>
        </div>
      ))}
    </div>
  );
}

function FindDrApp() {
  return (
    <div>
      <FindDoctor />
    </div>
  );
}

export default FindDrApp;