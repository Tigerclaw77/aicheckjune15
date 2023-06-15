import React, { useState, useEffect } from 'react';
import AxisOptionsBausch from '../parameters/AxisOptionsBausch';
import AxisOptionsAlcon from '../parameters/AxisOptionsAlcon';
import AxisOptionsCooper from '../parameters/AxisOptionsCooper';
import AxisOptionsVistakon from '../parameters/AxisOptionsVistakon';

const AxisOptions = ({
  name,
  manuf,
  selectedCyl,
  setSelectedCyl,
  selectedPower,
  selectedAxis,
  setSelectedAxis
}) => {

  const [AxisOptionsComponent, setAxisOptionsComponent] = useState(null);

  useEffect(() => {
    let component = null;

    switch (manuf) {
      case 'Bausch + Lomb':
        component = AxisOptionsBausch;
        break;
      case 'CooperVision':
        component = AxisOptionsCooper;
        break;
      case 'Acuvue':
      case 'Vistakon':
        component = AxisOptionsVistakon;
        break;
      case 'Alcon':
        component = AxisOptionsAlcon;
        break;
      default:
        break;
    }

    setAxisOptionsComponent(() => component);
  }, [manuf]);

  const handleSelectAxis = (axis) => {
    setSelectedAxis(axis);
  };

  return (
    <>
      {AxisOptionsComponent && (
        <div>
          <AxisOptionsComponent
            lensName={name}
            selectedPower={selectedPower}
            selectedCyl={selectedCyl}
            selectedAxis={selectedAxis}
            onSelectAxis={handleSelectAxis}
          />
        </div>
      )}
    </>
  );
};

export default AxisOptions;