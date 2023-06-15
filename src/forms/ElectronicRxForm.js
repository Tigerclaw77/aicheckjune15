import React, { useState } from 'react';
import { Col, Row, Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';

import { Formik, Field, Form, ErrorMessage } from 'formik';

const ElectronicRxForm = () => {

    // const [modalRx2Open, setModalRx2Open] = useState(false);
    // const handleRxSubmit = (values) => {
    //     const patientZip = {
    //         pAddZip: values.pAddZip
    //     };
    //     console.log(patientZip);
    //     setModalRx2Open(false)
    // };

    // const handleRx2Submit = (values) => {
    //     const patientAddress = {
    //         pFName: values.pFName,
    //         pLName: values.pLName,
    //         pAddStr1: values.pAddStr1,
    //         pAddStr2: values.pAddStr2,
    //         pAddCty: values.pAddCty,
    //         pAddSt: values.pAddSt,
    //         pAddZip: values.pAddZip,
    //     };
    //     console.log(patientAddress);
    //     setModalRx2Open(false)
    //     // setModalRx3Open(true)
    // };

    return (

        // <Modal isOpen={modalRx2Open}>
        //     <ModalHeader toggle={() => setModalRx2Open(false)}>
        //         Enter your pescription information:
        //     </ModalHeader>
        //     <ModalBody>
                // <Formik
                //     initialValues={{
                //         pFName: '',
                //         pLName: '',
                //         pAddStr1: '',
                //         pAddStr2: '',
                //         pAddCty: '',
                //         pAddSt: '',
                //         pAddZip: ''
                //     }}
                //     onSubmit={handleRx2Submit}
                // validate={validatePatientInfoForm1}
                // >
                    <Form>
                        <FormGroup>
                            <Label htmlFor='pFName'>
                                Patient Name (electronic)
                            </Label>
                            <Field
                                name='pFName'
                                placeholder='First Name'
                                className='form-control'
                            >
                            </Field>
                            <ErrorMessage name="pFName" />
                        </FormGroup>
                        <FormGroup>
                            <Field
                                name='pLName'
                                placeholder='Last Name'
                                className='form-control'
                            >
                            </Field>
                            <ErrorMessage name="pLName" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='pAddStr1'>
                                Patient Address:
                            </Label>
                            <Field
                                name='pAddStr1'
                                placeholder='Street Address 1'
                                className='form-control'
                            >
                            </Field>
                            <ErrorMessage name="pAddStr1" />
                        </FormGroup>
                        <FormGroup>
                            <Field
                                name='pAddStr2'
                                placeholder='Street Address 2 (optional)'
                                className='form-control'
                            >
                            </Field>
                            <ErrorMessage name="pAddStr2" />
                        </FormGroup>
                        <FormGroup>
                            <Field
                                name='pAddCity'
                                placeholder='City'
                                className='form-control'
                            >
                            </Field>
                            <ErrorMessage name="pAddCity" />
                        </FormGroup>
                        <FormGroup>
                            <Field
                                name='pAddSt'
                                placeholder='State'
                                className='form-control'
                            >
                            </Field>
                            <ErrorMessage name="pAddSt" />
                        </FormGroup>
                        <FormGroup>
                            <Field
                                name='pAddZip'
                                placeholder='ZIP'
                                className='form-control'
                            >
                            </Field>
                            <ErrorMessage name="pAddZip" />
                        </FormGroup>
                        <Button type='submit' color='primary'>
                            Submit
                        </Button>
                    </Form>
                // </Formik>
        //     </ModalBody>
        // </Modal>
    )
};

export default ElectronicRxForm;