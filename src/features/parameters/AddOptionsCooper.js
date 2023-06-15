import React from 'react';

const AddOptionsCooper = ({ selectedPower, lensName, selectedAdd, setSelectedAdd, onSelectAdd }) => {
  const getAddOptions = () => {
    let addOptions = [];

    const basicHalfStep = ['+1.00 D','+1.00 N','+1.50 D','+1.50 N','+2.00 D','+2.00 N','+2.50 D','+2.50 N'];
    const extendedHalfStep = ['+3.00 D', '+3.00 N', '+3.50 D', '+3.50 N', '+4.00 D', '+4.00 N']

    switch (lensName) {
      case 'clariti 1 day multifocal':
        addOptions = ['Low', 'High'];
        break;
      case 'MyDay multifocal':
        addOptions = ['Low', 'Mid', 'High'];
        break;
      case 'Proclear 1 day multifocal':
        addOptions = ['MF'];
        break;
      case 'MiSight 1 day':
        addOptions = ['+2.00'];
        break;
      case 'Biofinity multifocal':
      case 'Proclear multifocal':
      case 'Biofinity toric multifocal':
        addOptions = basicHalfStep;
        break;
      case 'Proclear multifocal XR':
        addOptions = (selectedPower <= 8.00 && selectedPower >= -10.00)
          ? basicHalfStep
          : basicHalfStep.concat(extendedHalfStep).sort();
        break;
      case 'Proclear multifocal toric':
        addOptions = basicHalfStep.concat(extendedHalfStep);
        break;
      default:
        break;
    }

    return addOptions;
  };

  const handleChange = (event) => {
    const selectedAdd = event.target.value;
    setSelectedAdd(selectedAdd);
    onSelectAdd(selectedAdd);
  };

  return (
    <div className="dropdown-item">
      <select id="addSelect" value={selectedAdd} onChange={handleChange}>
        <option value="">Select Add</option>
        {getAddOptions().map((add) => (
          <option key={add} value={add}>
            {add}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AddOptionsCooper;
