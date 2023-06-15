import React, { useState } from 'react';

const AxisOptionsBausch = ({ lensName, selectedPower, selectedCyl, onSelectAxis }) => {
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
      case 'ONEday for Astigmatism':
        switch (lensRange) {
          case 'lowMinus':
            axisOptions = (cyl >= -1.75) ? fullAxisOptions : (cyl === -2.25) ? reducedAxisOptions : reducedAxisOptions.filter((axis) => !['070', '080', '100', '110'].includes(axis));
            break;
          case 'highMinus':
            axisOptions = (cyl >= -1.75) ? fullAxisOptions.filter((axis) => !['030', '040', '050', '130', '140', '160'].includes(axis)) : reducedAxisOptions.filter((axis) => !['070', '080', '100', '110'].includes(axis));
            break;
          case 'plus':
            axisOptions = (cyl >= -1.75) ? reducedAxisOptions : reducedAxisOptions.filter((axis) => !['070', '110'].includes(axis));
            break;
          default:
            break;
        }
        break;
      case 'Ultra for Astigmatism':
        axisOptions = fullAxisOptions;
        break;
      case 'Ultra Multifocal for Astigmatism':
        axisOptions = (cyl >= -1.75) ? fullAxisOptions : reducedAxisOptions;
        break;
      case 'Soflens Toric':
        axisOptions = fullAxisOptions;
        break;
      default:
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

export default AxisOptionsBausch;
