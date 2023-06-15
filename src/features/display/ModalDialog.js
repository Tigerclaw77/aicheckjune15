import React from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

const ModalDialog = ({
  isOpen,
  toggle,
  toggleSecondModal,
  selectedEye,
  handleEyeChange,
  selectedPower,
  handlePowerChange,
  selectedCylinder,
  handleCylinderChange,
  selectedAxis,
  handleAxisChange,
  selectedAdd,
  handleAddChange,
  selectedColor,
  handleColorChange,
  selectedBaseCurve,
  handleBaseCurveChange,
  validationErrors,
  handleAddToCart,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} className="second-modal">
      <ModalHeader toggle={toggle}>Select Lens Features</ModalHeader>
      <ModalBody>
        <div>
          <label>Eye:</label>
          <div className="radio-wrapper">
            <label>
              <input
                type="radio"
                value="OD"
                checked={selectedEye === 'OD'}
                onChange={() => handleEyeChange('OD')}
              />
              <div className={`radio-button ${selectedEye === 'OD' ? 'selected' : ''}`}></div>
              <span>Right Eye (OD)</span>
            </label>
            <label>
              <input
                type="radio"
                value="OS"
                checked={selectedEye === 'OS'}
                onChange={() => handleEyeChange('OS')}
              />
              <div className={`radio-button ${selectedEye === 'OS' ? 'selected' : ''}`}></div>
              <span>Left Eye (OS)</span>
            </label>
          </div>
        </div>
        <hr />

        <div className="dropdown-wrapper">
          <div className="dropdown-item">
            <label>Power:</label>
            <select
              id="powerSelect"
              value={selectedPower}
              onChange={(e) => handlePowerChange(e.target.value)}
              required
            >
              <option value="">Select Power</option>
              <option value="-2.00">-2.00</option>
              <option value="-1.75">-1.75</option>
              <option value="-1.50">-1.50</option>
            </select>
            {validationErrors.power && (
              <div className="error-message power-error">{validationErrors.power}</div>
            )}
          </div>

          {selectedCylinder && (
            <div className="dropdown-item">
              <label>Cylinder (Astigmatism):</label>
              <select
                id="cylSelect"
                value={selectedCylinder}
                onChange={(e) => handleCylinderChange(e.target.value)}
                required
              >
                <option value="">Select Cylinder</option>
                <option value="-1.25">-1.25</option>
                <option value="-0.75">-0.75</option>
                <option value="-0.50">-0.50</option>
              </select>
              {validationErrors.cylinder && (
                <div className="error-message cylinder-error">{validationErrors.cylinder}</div>
              )}
            </div>
          )}

          {selectedAxis && (
            <div className="dropdown-item">
              <label>Axis:</label>
              <select
                id="axisSelect"
                value={selectedAxis}
                onChange={(e) => handleAxisChange(e.target.value)}
                required
              >
                <option value="">Select Axis</option>
                <option value="90">90</option>
                <option value="180">180</option>
                <option value="270">270</option>
              </select>
              {validationErrors.axis && (
                <div className="error-message axis-error">{validationErrors.axis}</div>
              )}
            </div>
          )}

          {selectedAdd && (
            <div className="dropdown-item">
              <label>Add:</label>
              <select
                id="addSelect"
                value={selectedAdd}
                onChange={(e) => handleAddChange(e.target.value)}
                required
              >
                <option value="">Select Add</option>
                <option value="+1.50">+1.50</option>
                <option value="+2.00">+2.00</option>
                <option value="+2.50">+2.50</option>
              </select>
              {validationErrors.add && (
                <div className="error-message add-error">{validationErrors.add}</div>
              )}
            </div>
          )}

          {selectedColor && (
            <div className="dropdown-item">
              <label>Color:</label>
              <select
                id="colorSelect"
                value={selectedColor}
                onChange={(e) => handleColorChange(e.target.value)}
                required
              >
                <option value="">Select Color</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Brown">Brown</option>
              </select>
              {validationErrors.color && (
                <div className="error-message color-error">{validationErrors.color}</div>
              )}
            </div>
          )}

          {selectedBaseCurve && (
            <div className="dropdown-item">
              <label>Base Curve:</label>
              <select
                value={selectedBaseCurve}
                onChange={(e) => handleBaseCurveChange(e.target.value)}
                required
              >
                <option value="">Select Base Curve</option>
                <option value="8.5">8.5</option>
                <option value="8.8">8.8</option>
                <option value="9.0">9.0</option>
              </select>
              {validationErrors.baseCurve && (
                <div className="error-message bc-error">{validationErrors.baseCurve}</div>
              )}
            </div>
          )}
        </div>
        <hr />

        <Button color="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <Button color="secondary" onClick={toggleSecondModal}>
          Cancel
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default ModalDialog;
