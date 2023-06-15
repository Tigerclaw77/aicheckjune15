import React, { useState } from 'react';
import CylOptionsBausch from '../parameters/CylOptionsBausch';
import CylOptionsAlcon from '../parameters/CylOptionsAlcon';
import CylOptionsCooper from '../parameters/CylOptionsCooper';
import CylOptionsVistakon from '../parameters/CylOptionsVistakon';

const CylOptions = ({ name, manuf, selectedPower, onSelectCylinder }) => {
  const [selectedCyl, setSelectedCyl] = useState(0);

  const CylOptionsComponent = {
    'Bausch + Lomb': CylOptionsBausch,
    'CooperVision': CylOptionsCooper,
    'Acuvue': CylOptionsVistakon,
    'Vistakon': CylOptionsVistakon,
    'Alcon': CylOptionsAlcon,
  }[manuf];

  const handleSelectCyl = (cyl) => {
    setSelectedCyl(cyl);
    onSelectCylinder(cyl);
  };

  return (
    <>
      {CylOptionsComponent && (
        <CylOptionsComponent
          lensName={name}
          selectedPower={selectedPower}
          selectedCyl={selectedCyl}
          onSelectCyl={handleSelectCyl}
        />
      )}
    </>
  );
};

export default CylOptions;
