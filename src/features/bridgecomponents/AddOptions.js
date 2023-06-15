import React, { useState } from 'react';
import AddOptionsAlcon from '../parameters/AddOptionsAlcon';
import AddOptionsBausch from '../parameters/AddOptionsBausch';
import AddOptionsCooper from '../parameters/AddOptionsCooper';
import AddOptionsVistakon from '../parameters/AddOptionsVistakon';

const AddOptions = ({ name, manuf, selectedCylinder, selectedPower, selectedAxis, onSelectAdd }) => {
  const [selectedAdd, setSelectedAdd] = useState(0);
  
  const addOptionsMapping = {
    'Alcon': AddOptionsAlcon,
    'Bausch + Lomb': AddOptionsBausch,
    'CooperVision': AddOptionsCooper,
    'Vistakon': AddOptionsVistakon,
    'Acuvue': AddOptionsVistakon,
  };

  const AddOptionsComponent = addOptionsMapping[manuf];

  const handleSelectAdd = (selectedAdd) => {
    onSelectAdd(selectedAdd);
  };

  console.log('AddOptions - selectedAdd:', selectedAdd);

  return (
    <>
      {AddOptionsComponent && (
        <AddOptionsComponent selectedAdd={selectedAdd} setSelectedAdd={setSelectedAdd} onSelectAdd={handleSelectAdd} />          
      )}
    </>
  );
};

export default AddOptions;