import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Formik, Field, Form } from 'formik';

import ElectronicRxForm from './ElectronicRxForm';
import ManualRxForm from './ManualRxForm';
import UnknownRxForm from './UnknownRx';

function ProvideRxForm() {
  const [selectedOption, setSelectedOption] = useState('');
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const getModalTitle = () => {
    switch (selectedOption) {
        case "upload":
            return "Enter Patient Information";
        case "manual":
            return "Enter Patient Information";
        case "unknown":
            return "Do you have your most recent contact lens packaging?";
        default:
            return "";
    }
}

  const renderProvideForm = () => {
    switch (selectedOption) {
      case 'upload':
        return <ElectronicRxForm />;
      case 'manual':
        return <ManualRxForm />;
      case 'unknown':
        return <UnknownRxForm />;
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleModal();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div id='rx-entry-options' role='group'>
        <label>
          <Field
            type='radio'
            name='rx-entry-option'
            value='upload'
            checked={selectedOption === 'upload'}
            onChange={handleOptionChange}
          />
          <span className='rx-entry'>Upload/email/fax the prescription (recommended)</span>
        </label>
        <label>
          <Field
            type='radio'
            name='rx-entry-option'
            value='manual'
            checked={selectedOption === 'manual'}
            onChange={handleOptionChange}
          />
          <span className='rx-entry'>Enter prescription information myself</span>
        </label>
        <label>
          <Field
            type='radio'
            name='rx-entry-option'
            value='unknown'
            checked={selectedOption === 'unknown'}
            onChange={handleOptionChange}
          />
          <span className='rx-entry'>I don't have access to my prescription</span>
        </label>
      </div>
      <Button color='primary' onClick={toggleModal}>
        Submit
      </Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{getModalTitle()}</ModalHeader>
        <ModalBody>{renderProvideForm()}</ModalBody>
      </Modal>
    </Form>
  );
}

export default ProvideRxForm;