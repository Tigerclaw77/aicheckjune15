import React, { useState, useEffect } from 'react';

const CylOptionsVistakon = ({ lensName, selectedPower, onSelectCyl }) => {
  const [selectedCyl, setSelectedCyl] = useState(0);

  const getCylOptions = () => {
    let reducedCylOptions = [-0.75, -1.25, -1.75];
    let cylOptions = [-0.75, -1.25, -1.75, -2.25];

    switch (lensName) {
      case 'Oasys 1-Day for Astigmatism':
      case 'Moist for Astigmatism':
      case 'Vita for Astigmatism':
        if (selectedPower < -6.00 || selectedPower > 0) {
          cylOptions = reducedCylOptions;
        }
        break;
      case 'Oasys for Astigmatism':
        cylOptions = selectedPower <= 0 ? [...reducedCylOptions, -2.75] : reducedCylOptions;
        break;
      default:
        break;
    }

    return cylOptions;
  };

  useEffect(() => {
    console.log('Cyl COV:', selectedCyl);
  }, [selectedCyl]);

  const handleSelectCyl = (event) => {
    const selectedCylValue = event.target.value;
    setSelectedCyl(selectedCylValue);
    onSelectCyl(selectedCylValue);
  };

  return (
    <div className="dropdown-item">
      <select
        id="cylinderSelect"
        value={selectedCyl}
        onChange={handleSelectCyl}
      >
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

export default CylOptionsVistakon;
