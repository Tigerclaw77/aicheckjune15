import React, { useState } from 'react';

const AxisOptionsVistakon = ({ lensName, selectedPower, selectedCyl, onSelectAxis }) => {
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

  const getAxisOptions = () => {
    const cyl = parseFloat(selectedCyl);
    const lensRange = getLensRange();

    const fullAxisOptions = ['010', '020', '030', '040', '050', '060', '070', '080', '090', '100', '110', '120', '130', '140', '150', '160', '170', '180'];
    const reducedAxisOptions = ['010', '020', '070', '080', '090', '100', '110', '160', '170', '180'];

    switch (lensName) {
      case 'Oasys 1-Day for Astigmatism':
      case 'Moist for Astigmatism':
      case 'Vita for Astigmatism':
        return cyl >= -1.75 ? fullAxisOptions : reducedAxisOptions;
      case 'Oasys for Astigmatism':
        if (lensRange === 'lowMinus') {
          return cyl >= -1.75 ? fullAxisOptions : reducedAxisOptions;
        } else if (lensRange === 'highMinus') {
          return cyl >= -1.25 ? fullAxisOptions.filter((axis) => ![...reducedAxisOptions, '120', '130', '140', '150'].includes(axis)) : fullAxisOptions.filter((axis) => ![...reducedAxisOptions, '120', '130', '140', '150', '160', '170', '180'].includes(axis));
        } else {
          return reducedAxisOptions;
        }
      default:
        return [];
    }
  };

  const handleSelectAxis = (event) => {
    const selectedAxis = event.target.value;
    setSelectedAxis(selectedAxis);
    onSelectAxis(selectedAxis);
  };

  const axisOptions = getAxisOptions();

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

export default AxisOptionsVistakon;
