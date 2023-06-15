import React from 'react';

const BaseCurveSelector = ({ selectedBaseCurve, handleBaseCurveChange, validationErrors }) => {
  return (
    <div>
      <label htmlFor="baseCurveSelect">Select Base Curve:</label>
      <select
        id="baseCurveSelect"
        value={selectedBaseCurve}
        onChange={(e) => handleBaseCurveChange(e.target.value)}
        className={validationErrors.baseCurve ? 'error' : ''}
      >
        <option value="">Select Base Curve</option>
        <option value="8.4">8.4</option>
        <option value="8.6">8.6</option>
        {/* Add more base curve options as needed */}
      </select>
      {validationErrors.baseCurve && <div className="error-message">{validationErrors.baseCurve}</div>}
    </div>
  );
};

export default BaseCurveSelector;
