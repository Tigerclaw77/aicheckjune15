import React, { useState } from 'react';

const AxisOptionsAlcon = ({ lensName, selectedPower, selectedCyl, onSelectAxis }) => {
  const [selectedAxis, setSelectedAxis] = useState('');

  const getLensRange = () => {
    if (selectedPower >= -6.00 && selectedPower <= 0) {
      return 'lowMinus';
    } else if (selectedPower < -6.00) {
      return 'highMinus';
    } else {
      return 'plus';
    }
  };

  let axisOptions = ['000'];
  const reducedAxisOptions = ['010', '020', '070', '080', '090', '100', '110', '160', '170', '180'];
  const fullAxisOptions = ['010', '020', '030', '040', '050', '060', '070', '080', '090', '100', '110', '120', '130', '140', '150', '160', '170', '180'];

  const switchAxisBausch = () => {
    const cyl = parseFloat(selectedCyl);
    const lensRange = getLensRange();

    switch (lensName) {
      case 'Air Optix plus HydraGlyde for Astigmatism':
        axisOptions = fullAxisOptions;
        break;
      case 'Dailies AquaComfort Plus Toric':
        axisOptions = reducedAxisOptions;
        break;
      case 'Dailies Total 1 for Astigmatism':
      case 'Precision1 for Astigmatism':
        if (lensRange === 'lowMinus' || lensRange === 'highMinus' || lensRange === 'plus') {
          axisOptions = (cyl >= -1.75) ? reducedAxisOptions : reducedAxisOptions.filter((axis) => !['070', '080', '090', '100', '110'].includes(axis));
        }
        break;
      case 'Total30 for Astigmatism':
        axisOptions = fullAxisOptions;
        break;
      default:
        // Handle the default case here
        break;
    }
  };

  switchAxisBausch();

  const handleSelectAxis = (event) => {
    const selectedAxis = event.target.value;
    setSelectedAxis(selectedAxis);
    onSelectAxis(selectedAxis);
  };

  return (
    <div className="dropdown-item">
      <select
        id="axisSelect"
        value={selectedAxis}
        onChange={handleSelectAxis}
      >
        <option value="">Select Axis</option>
        {axisOptions.map((axis) => (
          <option key={axis} value={axis}>
            {axis}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AxisOptionsAlcon;
