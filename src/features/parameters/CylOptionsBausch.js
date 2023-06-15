import React, { useState } from 'react';

const CylOptionsBausch = ({ lensName, selectedPower, onSelectCyl }) => {
  const [selectedCyl, setSelectedCyl] = useState(0);

  const getCylOptions = () => {
    let cylOptions = [-0.75, -1.25, -1.75, -2.25];

    if (
      lensName === 'ONEday for Astigmatism' &&
      selectedPower >= -6.00 &&
      selectedPower <= 0
    ) {
      cylOptions.push(-2.75);
    }

    if (
      ['Ultra for Astigmatism', 'Ultra Multifocal for Astigmatism', 'Soflens Toric'].includes(
        lensName
      )
    ) {
      cylOptions.push(-2.75);
    }

    return cylOptions;
  };

  const handleSelectCyl = (event) => {
    const selectedCyl = event.target.value;
    setSelectedCyl(selectedCyl);
    onSelectCyl(selectedCyl);
  };

  return (
    <div className="dropdown-item">
      <select id="cylinderSelect" value={selectedCyl} onChange={handleSelectCyl}>
        <option value="">Select Cyl</option>
        {getCylOptions().map((cyl) => (
          <option key={cyl} value={cyl}>
            {cyl}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CylOptionsBausch;
