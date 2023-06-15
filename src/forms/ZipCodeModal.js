import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

function ZipCodeModal({ onZipCodeSubmit }) {
  const [zipCode, setZipCode] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onZipCodeSubmit(zipCode);
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
  }

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label htmlFor="zipCode">Enter your ZIP code:</label>
        <input type="text" name="zipCode" id="zipCode" value={zipCode} onChange={e => setZipCode(e.target.value)} onKeyDown={handleKeyDown} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ZipCodeModal;