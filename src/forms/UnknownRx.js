import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import ManualRxForm from './ManualRxForm';

const UnknownRxForm = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const handleSubmit = () => {
        // handle form submission here
        // for example, submit the selectedOption value to a server or store it in state
        console.log(`Option ${selectedOption} selected`);
        toggle();
    }

    return (
        <Formik initialValues={{}}>
            {() => (
                <Form>
                    <div>
                        <label>
                            <Field type="radio" name="option" value="1" checked={selectedOption === '1'} onChange={() => setSelectedOption('1')} />
                            <span class="unknown-options">Yes, for both eyes</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <Field type="radio" name="option" value="2" checked={selectedOption === '2'} onChange={() => setSelectedOption('2')} />
                            <span class="unknown-options">No</span>
                        </label>
                    </div>
                    {/* <div>
            <label>
              <Field type="radio" name="option" value="3" checked={selectedOption === '3'} onChange={() => setSelectedOption('3')} />
              Option 3
            </label>
          </div> */}
                    <Button type="button" color="primary" onClick={toggle}>
                        Submit
                    </Button>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Enter Patient Information</ModalHeader>
                        <ModalBody>
                            <ManualRxForm />
                        </ModalBody>                        
                    </Modal>
                </Form>
            )}
        </Formik>
    );
};

export default UnknownRxForm;