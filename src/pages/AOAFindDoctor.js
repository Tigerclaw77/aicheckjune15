import React, { useState, useCallback } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function AOAFindDoctor() {
  const [modalOpen, setModalOpen] = useState(true);

  const handleOkClick = () => {
    window.open('https://www.aoa.org/healthy-eyes/find-a-doctor?sso=y', '_blank', 'noopener noreferrer');
    setModalOpen(false);
  };

  const handleCancelClick = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Modal isOpen={modalOpen}>
        <ModalHeader>Leaving Site</ModalHeader>
        <ModalBody>
          You are now leaving our website and will be redirected to another website. Are you sure you want to proceed?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleOkClick}>OK</Button>{' '}
          <Button color="secondary" onClick={handleCancelClick}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AOAFindDoctor;
