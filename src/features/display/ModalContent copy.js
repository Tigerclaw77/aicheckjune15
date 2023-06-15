import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardText, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import PowerOptions from '../bridgecomponents/PowerOptions';
import CylOptions from '../bridgecomponents/CylOptions';
import AxisOptions from '../bridgecomponents/AxisOptions';
import AddOptions from '../bridgecomponents/AddOptions';
import ColorOptions from '../bridgecomponents/ColorOptions';
import BCOptions from '../bridgecomponents/BCOptions';

const ModalContent = ({
    imagePath,
    manuf,
    name,
    priceSix,
    priceYear,
    description,
    toric,
    multifocal,
    color,
    multBC,
}) => {
    const [secondModalOpen, setSecondModalOpen] = useState(false);
    const [selectedEye, setSelectedEye] = useState('OD');
    const [selectedPower, setSelectedPower] = useState(null);
    const [selectedCyl, setSelectedCyl] = useState(0);
    const [selectedAxis, setSelectedAxis] = useState('');
    const [selectedAdd, setSelectedAdd] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedBaseCurve, setSelectedBaseCurve] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const [message, setMessage] = useState('');

    const toggleSecondModal = () => {
        setSecondModalOpen(!secondModalOpen);
        resetValidationErrors();
    };

    const handleAddToCart = () => {
        const validationErrors = validateForm();
        setValidationErrors(validationErrors);

        console.log("Selected Power:", selectedPower);
        console.log("Selected Cylinder:", selectedCyl);
        console.log("Selected Axis:", selectedAxis);
        console.log("Selected Add:", selectedAdd);
        console.log("Selected Add:", selectedColor);
        console.log("Selected Add:", selectedBaseCurve);
    };

    const handleEyeChange = (eye) => {
        setSelectedEye(eye);
    };

    const handleCylinderChange = (selectedCyl) => {
        setSelectedCyl(selectedCyl);
    };

    const handleAxisChange = (axis) => {
        setSelectedAxis(axis);
    };

    const handleAddChange = (add) => {
        setSelectedAdd(add);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleBaseCurveChange = (baseCurve) => {
        setSelectedBaseCurve(baseCurve);
    };

    const resetValidationErrors = () => {
        setValidationErrors({});
        setMessage('');
    };

    const validateForm = () => {
        const errors = {};

        if (selectedPower === null) {
            Object.assign(errors, { power: 'Required' });
        }

        if (toric && selectedCyl === 0) {
            Object.assign(errors, { cylinder: 'Required' });
        }

        if (toric && selectedAxis === '') {
            Object.assign(errors, { axis: 'Required' });
        }

        if (multifocal && selectedAdd === '') {
            Object.assign(errors, { add: 'Required' });
        }

        if (color && selectedColor === '') {
            Object.assign(errors, { color: 'Required' });
        }

        if (multBC && selectedBaseCurve === '') {
            Object.assign(errors, { baseCurve: 'Required' });
        }

        return errors;
    };


    return (
        <Card>
            {imagePath && (
                <CardImg
                    src={imagePath}
                    alt={name}
                    style={{
                        padding: '10px',
                        maxHeight: '400px',
                        height: '100%',
                        width: 'auto',
                        objectFit: 'contain',
                    }}
                />
            )}
            <CardBody>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <CardText className="price-card">
                            6 Months: <span className="price">$</span>
                            <span className="price">{priceSix}</span> per eye
                            <br />
                            12 Months: <span className="price">$</span>
                            <span className="price">{priceYear}</span> per eye
                        </CardText>
                        <CardText>{description}</CardText>
                    </div>

                    <div>
                        <Button color="primary" onClick={toggleSecondModal}>
                            Choose your powers
                        </Button>
                    </div>
                </div>

                <Modal isOpen={secondModalOpen} toggle={toggleSecondModal} className="second-modal">
                    <ModalHeader toggle={toggleSecondModal}>Select Lens Features</ModalHeader>
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
                                <PowerOptions name={name} manuf={manuf} selectedPower={selectedPower} onSelectPower={setSelectedPower} />

                                {validationErrors.power && (
                                    <div className="error-message power-error">{validationErrors.power}</div>
                                )}
                            </div>

                            {toric && (
                                <div className="dropdown-item">
                                    <label>Cylinder (Astigmatism):</label>
                                    <CylOptions
                                        name={name}
                                        manuf={manuf}
                                        selectedCyl={selectedCyl}
                                        onSelectCylinder={handleCylinderChange}
                                        selectedPower={selectedPower} />

                                    {validationErrors.cylinder && (
                                        <div className="error-message cylinder-error">{validationErrors.cylinder}</div>
                                    )}
                                </div>
                            )}

                            {toric && (
                                <div className="dropdown-item">
                                    <label>Axis:</label>
                                    <AxisOptions
                                        name={name}
                                        manuf={manuf}
                                        selectedCyl={selectedCyl}
                                        selectedPower={selectedPower}
                                        selectedAxis={selectedAxis}
                                        setSelectedAxis={handleAxisChange}
                                    />
                                    {validationErrors.axis && (
                                        <div className="error-message axis-error">{validationErrors.axis}</div>
                                    )}
                                </div>
                            )}

                            {multifocal && (
                                <div className="dropdown-item">
                                    <label>Add:</label>
                                    <AddOptions
                                        name={name}
                                        manuf={manuf}
                                        selectedCyl={selectedCyl}
                                        selectedPower={selectedPower}
                                        selectedAxis={selectedAxis}
                                        selectedAdd={selectedAdd}
                                        onSelectAdd={handleAddChange}
                                    />
                                    {validationErrors.add && (
                                        <div className="error-message add-error">{validationErrors.add}</div>
                                    )}
                                </div>
                            )}

                            {color && (
                                <div className="dropdown-item">
                                    <label>Color:</label>
                                    <ColorOptions
                                        lensName={name}
                                        selectedColor={selectedColor}
                                        setSelectedColor={handleColorChange}
                                    />
                                    {validationErrors.color && (
                                        <div className="error-message color-error">{validationErrors.color}</div>
                                    )}
                                </div>
                            )}

                            {multBC && (
                                <div className="dropdown-item">
                                    <label>Base Curve:</label>
                                    <BCOptions
                                        multBC={multBC}
                                        lensName={name}
                                        selectedBaseCurve={selectedBaseCurve}
                                        handleBaseCurveChange={handleBaseCurveChange}
                                        validationErrors={validationErrors}
                                    />
                                    {validationErrors.baseCurve && (
                                        <div className="error-message bc-error">{validationErrors.baseCurve}</div>
                                    )}
                                </div>
                            )}

                        </div>

                        <div className="text-center mt-4">
                            <Button color="primary" onClick={handleAddToCart}>
                                Add to Cart
                            </Button>
                        </div>

                        {message && <div className="error-message">{message}</div>}
                    </ModalBody>
                </Modal>
            </CardBody>
        </Card>
    );
};

export default ModalContent;