import React, { useState, useEffect } from 'react';
import AxisOptionsBausch from '../parameters/AxisOptionsBausch';
import AxisOptionsCooper from '../parameters/AxisOptionsCooper';
import ALCONPRICES from '../../app/shared/ALCONPRICES';
import VISTAKONPRICES from '../../app/shared/VISTAKONPRICES';

const PriceOptions = ({
  name,
  manuf,
  selectedCyl,
  setSelectedCyl,
  selectedPower,
  selectedAxis,
  setSelectedAxis
}) => {

  const [PriceOptionsComponent, setPriceOptionsComponent] = useState(null);

  useEffect(() => {
    let priceList = null;

    switch (manuf) {
      case 'Bausch + Lomb':
        priceList = AxisOptionsBausch;
        break;
      case 'CooperVision':
        priceList = AxisOptionsCooper;
        break;
      case 'Acuvue':
      case 'Vistakon':
        priceList = VISTAKONPRICES;
        break;
      case 'Alcon':
        priceList = ALCONPRICES;
        break;
      default:
        break;
    }

    setPriceOptionsComponent(() => priceList);
  }, [manuf]);

  const handleSelectPrice = (price) => {
    setSelectedPrice(price);
  };

  return (
    <>
      {PriceOptionsComponent && (
        <div>
          <PriceOptionsComponent
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

export default PriceOptions;