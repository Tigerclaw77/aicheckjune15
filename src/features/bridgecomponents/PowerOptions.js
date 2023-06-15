import React, { useState, useEffect } from 'react';
import { CLSPHERE } from '../../app/shared/CLSPHERE';

const PowerOptions = ({ name, onSelectPower }) => {
  const [selectedPower, setSelectedPower] = useState(0);
  const [selectedCyl, setSelectedCyl] = useState(0);

  useEffect(() => {
  }, [selectedCyl]);

  const matchingLens = CLSPHERE.find((lens) => lens.name === name);
  const { pl, minusQuarter, plusQuarter, maxPlus, maxMinus, fiftySteps, name: lensName } = matchingLens || {};

  const handleSelectChange = (event) => {
    const selectedPower = parseFloat(event.target.value);
    setSelectedPower(selectedPower.toFixed(2));
    onSelectPower(selectedPower.toFixed(2));

    setSelectedCyl(selectedPower.toFixed(2));
  };

  const generatePowerOptions = () => {
    const standardMinusSpherePowers = [
      -0.50, -0.75, -1.00, -1.25, -1.50, -1.75, -2.00, -2.25, -2.50,
      -2.75, -3.00, -3.25, -3.50, -3.75, -4.00, -4.25, -4.50, -4.75,
      -5.00, -5.25, -5.50, -5.75, -6.00
    ];

    const standardPlusSpherePowers = [
      +0.50, +0.75, +1.00, +1.25, +1.50, +1.75, +2.00, +2.25, +2.50,
      +2.75, +3.00, +3.25, +3.50, +3.75, +4.00, +4.25, +4.50, +4.75,
      +5.00, +5.25, +5.50, +5.75, +6.00
    ];

    const powerOptions = new Set();

    if (minusQuarter) {
      powerOptions.add(-0.25);
    }

    standardMinusSpherePowers.forEach((power) => {
      powerOptions.add(power);
    });

    // go beyond -6.00
    if (maxMinus < -6.00) {
      const increment = fiftySteps ? 0.50 : 0.25;
      for (let power = -6.00; power >= maxMinus; power -= increment) {
        powerOptions.add(power);
      }
    }

    // take away if max is > +6.00
    if (maxMinus > -6.00) {
      Array.from(powerOptions).forEach((power) => {
        if (power < maxMinus) {
          powerOptions.delete(power);
        }
      });
    }

    if (pl) {
      powerOptions.add(0.00);
    }

    if (plusQuarter) {
      powerOptions.add(0.25);
    }

    // put in the normal powers up to +6.00
    if (maxPlus >= 0.0) {
      standardPlusSpherePowers.forEach((power) => {
        powerOptions.add(power);
      });
    }

    // go beyond +6.00
    if (maxPlus > 6.00) {
      const increment = fiftySteps ? 0.50 : 0.25;
      for (let power = 6.00; power <= maxPlus; power += increment) {
        powerOptions.add(power);
      }
    }

    // take away if max is < +6.00
    if (maxPlus < 6.00) {
      Array.from(powerOptions).forEach((power) => {
        if (power > maxPlus) {
          powerOptions.delete(power);
        }
      });
    }

    // if (lensName.includes('XR')) {
    //   const excludeRangeStart = -6.00;
    //   const excludeRangeEnd = 8.00;
    //   const excludeRangeIncrement = 0.25;
    //   const excludeRange = [];

    //   for (let power = excludeRangeStart; power <= excludeRangeEnd; power += excludeRangeIncrement) {
    //     excludeRange.push(power);
    //   }

    //   excludeRange.forEach((power) => {
    //     powerOptions.delete(power);
    //   });
    // }

    switch (lensName) {
      case 'Biofinity XR': {
        const excludeRangeStart = -12.00;
        const excludeRangeEnd = 8.00;
        const excludeRangeIncrement = 0.25;
        const excludeRange = [];
    
        for (let power = excludeRangeStart; power <= excludeRangeEnd; power += excludeRangeIncrement) {
          excludeRange.push(power);
        }
    
        excludeRange.forEach((power) => {
          powerOptions.delete(power);
        });
        break;
      }
    
      case 'Biofinity XR toric': {
        const excludeRangeStart = -10.00;
        const excludeRangeEnd = 8.00;
        const excludeRangeIncrement = 0.25;
        const excludeRange = [];
        
    if (selectedCyl >= -2.25){
        for (let power = excludeRangeStart; power <= excludeRangeEnd; power += excludeRangeIncrement) {
          excludeRange.push(power);
        }
    
        excludeRange.forEach((power) => {
          powerOptions.delete(power);
        });}
        break;
      }
    
      // Add more cases for other lens names if needed
    
      default:
        // Handle default case if lensName doesn't match any specific case
        break;
    }
    

    return Array.from(powerOptions);
  };

  const powerOptions = generatePowerOptions();

  return (
    <div className="dropdown-item">
      <select
        className="powerSelect"
        value={selectedPower}
        onChange={handleSelectChange}
      >
        <option value="">Select Power</option>

        {powerOptions.map((power) => (
          <option key={power} value={power.toFixed(2)}>
            {power >= 0 ? `+${power.toFixed(2)}` : power.toFixed(2)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PowerOptions;
