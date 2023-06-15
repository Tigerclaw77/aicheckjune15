import React, { useState } from 'react';

const CylOptionsAlcon = ({ lensName, selectedPower, onSelectCyl }) => {
    const [selectedCyl, setSelectedCyl] = useState(0);

    const getCylOptions = () => {
        let cylOptions = [-0.75, -1.25, -1.75, -2.25];

        if (lensName === 'Air Optix plus HydraGlyde for Astigmatism' && selectedPower >= -6.00 && selectedPower <= 0) {
            cylOptions.push(-2.75);
        } else if (lensName === 'Dailies AquaComfort Plus Toric') {
            cylOptions = cylOptions.filter((cyl) => cyl !== -2.25);
        }

        return cylOptions;
    };

    const handleSelectCyl = (event) => {
        const selectedCyl = event.target.value;
        setSelectedCyl(selectedCyl);
        onSelectCyl(selectedCyl);
    };

    return (
        <div className="dropdown-item">
            <select id="cylinderSelect" value={selectedCyl} onChange={handleSelectCyl}>
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

export default CylOptionsAlcon;
