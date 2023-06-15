import React, { useState } from 'react';

const CylOptionsCooper = ({ lensName, onSelectCyl }) => {
    const [selectedCylinder, setSelectedCylinder] = useState(0);

    const getCylOptions = () => {
        let cylOptions = [-0.75, -1.25, -1.75, -2.25];
        const cylXROptions = [-2.75, -3.25, -3.75, -4.25, -4.75, -5.25, -5.75];

        switch (lensName) {
            case 'Biofinity toric multifocal':
            case 'Biofinity XR toric':
            case 'Proclear multifocal toric':
            case 'Proclear toric XR':
                cylOptions = [...cylOptions, ...cylXROptions];
                break;
            default:
                break;
        }

        return cylOptions;
    };

    const handleSelectCyl = (event) => {
        const selectedCyl = event.target.value;
        setSelectedCylinder(selectedCyl);
        onSelectCyl(selectedCyl);
    };

    return (
        <div className="dropdown-item">
            <select id="cylinderSelect" value={selectedCylinder} onChange={handleSelectCyl}>
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

export default CylOptionsCooper;
