import React, { useState } from 'react';

const AxisOptionsCooper = ({ lensName, selectedPower, selectedCyl, onSelectAxis }) => {
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
  const extendedAxisOptions = ['005', '015', '025', '035', '045', '055', '065', '075', '085', '095', '105', '115', '125', '135', '145', '155', '165', '175'];

  const switchAxisCooper = () => {
    const cyl = parseFloat(selectedCyl);
    const lensRange = getLensRange();

    switch (lensName) {
      case 'Avaira Vitality toric':
        axisOptions = fullAxisOptions;
        break;
      case 'Biofinity toric':
        axisOptions = (cyl >= -1.75) ? fullAxisOptions : reducedAxisOptions;
        break;
      case 'Biofinity toric multifocal':
        axisOptions = fullAxisOptions.concat(extendedAxisOptions).sort();
        break;
      case 'Biofinity XR toric':
        axisOptions = (((selectedPower <= 8.00) && (selectedPower >= -10.00)) && (selectedCyl >= -2.25)) ? reducedAxisOptions : fullAxisOptions.concat(extendedAxisOptions).sort();
        break;
      case 'Biomedics Toric':
        axisOptions = fullAxisOptions;
        break;
      case 'clariti 1 day toric':
        switch (lensRange) {
          case 'lowMinus':
            axisOptions = (cyl >= -1.75) ? fullAxisOptions : reducedAxisOptions;
            break;
          case 'highMinus':
            if (cyl >= -1.75) {
              const elementsToRemove = ['030', '040', '050', '130', '140', '160'];
              axisOptions = fullAxisOptions.filter((axis) => !elementsToRemove.includes(axis));
            } else {
              const elementsToRemove = ['070', '080', '100', '110'];
              axisOptions = reducedAxisOptions.filter((axis) => !elementsToRemove.includes(axis));
            }
            break;
          case 'plus':
            axisOptions = reducedAxisOptions;
            break;
          default:
            break;
        }
        break;
      case 'MyDay toric':
        axisOptions = fullAxisOptions;
        break;
      case 'Proclear multifocal toric':
        axisOptions = fullAxisOptions.concat(extendedAxisOptions).sort();
        break;
      case 'Proclear toric':
        axisOptions = fullAxisOptions;
        break;
      case 'Proclear toric XR':
        axisOptions = fullAxisOptions.concat(extendedAxisOptions).sort();
        break;
      default:
        break;
    }
  };

  switchAxisCooper();

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

export default AxisOptionsCooper;
