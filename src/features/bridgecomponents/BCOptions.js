import React, { useState } from "react";
import { CONTACTLENSES } from "../../app/shared/CONTACTLENSES";

const BCOptions = ({ multBC, lensName }) => {
    const [selectedBaseCurve, setSelectedBaseCurve] = useState("");

    if (!multBC) {
        return <span>{lensName}</span>;
    }

    const lens = CONTACTLENSES.find((lens) => lens.name === lensName);
    const baseCurves = [lens.BC1, lens.BC2];

    if (lens.BC3) {
        baseCurves.push(lens.BC3);
    }

    return (
        <>
            <select
                id='bcSelect'
                value={selectedBaseCurve}
                onChange={(e) => setSelectedBaseCurve(e.target.value)}
            >
                {baseCurves.map((baseCurve) => (
                    <option key={baseCurve} value={baseCurve}>
                        {baseCurve}
                    </option>
                ))}
            </select>
        </>
    );
};

export default BCOptions;
