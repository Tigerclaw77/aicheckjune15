import React from 'react';
import VISTAKONPRICES from '../../app/shared/VISTAKONPRICES';
import ALCONPRICES from '../../app/shared/ALCONPRICES';

const PriceArray = [
  ...VISTAKONPRICES.map((product) => ({ ...product, hasMultipleOptions: false })),
  ...ALCONPRICES.map((product) => ({ ...product, hasMultipleOptions: false })),
  // ...BAUSCHPRICES.map((product) => ({ ...product, hasMultipleOptions: false })),
  // ...COOPERPRICES.map((product) => ({ ...product, hasMultipleOptions: false })),
];

const PackageSizeOptions = ({ name, onSelectPackageSize }) => {
  const handlePackageSizeChange = (event) => {
    const selectedSize = event.target.value;
    // Handle the selected package size
    console.log('Selected Package Size:', selectedSize);
  };

  const getOptionsByProductName = (name) => {
    switch (name) {
      case 'Oasys Max 1-Day':
      case 'Oasys Max 1-Day Multifocal':
      case 'Oasys 1-Day for Astigmatism':
      case 'Moist':
      case 'Moist for Astigmatism':
      case 'Moist Multifocal':
      case 'TruEye':
        return ['30P', '90P'];
        break;
      case 'Oasys':
        return ['12P', '24P'];
        break;
      case 'Oasys with Transitions':
        return ['06P', '25P'];
        break;
      case 'Vita':
        return ['06P', '12P'];
        break;
      default:
        return [];
    }
  };

  const getLensQuantityFromBoxID = (boxID) => {
    switch (boxID) {
      case '30P':
        return 30;
      case '90P':
        return 90;
      case '06P':
        return 6;
      case '12P':
        return 12;
      case '24P':
        return 24;
      case '25P':
        return 25;
      default:
        console.log('Invalid boxID:', boxID);
        return 0;
    }
  };

  const calculatePricePerLens = (name, boxID) => {
    const selectedProduct = PriceArray.find(
      (product) => product.name === name && product.boxID === boxID
    );
    const lensQuantity = getLensQuantityFromBoxID(boxID);

    if (selectedProduct && lensQuantity > 0) {
      return selectedProduct.MSRP / lensQuantity;
    }

    return 0; // or any default value you prefer when the calculation is not possible
  };

  const generateOptions = () => {
    const options = getOptionsByProductName(name);

    return options.map((option) => {
      const lensQuantity = getLensQuantityFromBoxID(option);
      const quantityText = lensQuantity === 1 ? `${lensQuantity} lens` : `${lensQuantity} pack`;
      const pricePerLens = calculatePricePerLens(name, option);

      return {
        packageSize: quantityText,
        pricePerLens,
      };
    });
  };

  const options = generateOptions();

  return (
    <div className="dropdown-item">
      <select
        id="packageSelect"
        style={{ width: 'auto', minWidth: '2em' }}
        onChange={handlePackageSizeChange}
      >
        <option value="" disabled>
          Select Package Size
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.packageSize}>
            {`${option.packageSize} - $${option.pricePerLens.toFixed(2)} per lens`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PackageSizeOptions;
