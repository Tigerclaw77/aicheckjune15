import React, { useState } from 'react';
import { Col, Row, Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import AnimatedHomeDisplayCard from './AnimatedHomeDisplayCard';
import { HOMECARDS } from '../../app/shared/HOMECARDS';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateZipCode } from '../../utils/validateZipCode';
import FindDoctorForm from '../../forms/FindDoctorForm';
import ProvideRxForm from '../../forms/ProvideRxForm';
import ZipCodeModal from '../../forms/ZipCodeModal';
import FindDrForm from '../../forms/FindDoctorForm';
import AOAFindDoctor from '../../pages/AOAFindDoctor';

const HomeDisplay = () => {
    const items = HOMECARDS;
    const [modalRx1Open, setModalRx1Open] = useState(false);
    const [modalRx2Open, setModalRx2Open] = useState(false);
    const [modalRx3Open, setModalRx3Open] = useState(false);
    const [modalDrOpen, setModalDrOpen] = useState(false);

    const handleRx1Submit = (values) => {
        const rxEnterType = {
            rxEnterType: values.rxEnterType
        };
        console.log(rxEnterType);
        setModalRx1Open(false)
        setModalRx2Open(true)
    };

    const handleRx2Submit = (values) => {
        const patientAddress = {
            pFName: values.pFName,
            pLName: values.pLName,
            pAddStr1: values.pAddStr1,
            pAddStr2: values.pAddStr2,
            pAddCty: values.pAddCty,
            pAddSt: values.pAddSt,
            pAddZip: values.pAddZip,
        };
        console.log(patientAddress);
        setModalRx2Open(false)
        setModalRx3Open(true)
    };

    const handleRx3Submit = (values) => {
        const patientLensInfo1 = {
            manuf: values.manuf,
            lensName: values.lensName,
            modality: values.modality,
            baseCurve: values.baseCurve,
            diam: values.diam,
            sph: values.sph,
            toric: values.toric,
            cyl: values.cyl,
            axis: values.axis,
            multifocal: values.multifocal,
            addPower: values.addPower,
            addDominance: values.addDominance,
            coloredLens: values.coloredLens,
            lensColor: values.lensColor,
            eye: values.eye,
        };
        console.log(patientLensInfo1);
        setModalRx3Open(false)
    };

    const handleDrSubmit = (values) => {
        const patientZip = {
            pAddZip: values.pAddZip
        };
        console.log(patientZip);
        setModalDrOpen(false)
    };

    return (
        <Row>
            {items.map((item, idx) => {
                return (

                    <>
                    {/* Selecting one of the three options: if-statement */}
                        <Col md className='m-1' key={idx} onClick={() => {
                            if (idx === 0) {
                                window.location.href = 'http://localhost:3000/shopcontacts'
                            }
                            else if (idx === 1) {
                                setModalRx1Open(true)
                            }
                            else if (idx === 2) {
                                setModalDrOpen(true)
                                // window.location.href = 'https://www.aoa.org/healthy-eyes/find-a-doctor?sso=y'
                            };

                        }}>
                            <AnimatedHomeDisplayCard item={item} />
                        </Col>
                        {/* Modal to decide Rx input method */}
                        <Modal isOpen={modalRx1Open}>
                            <ModalHeader toggle={() => setModalRx1Open(false)}>
                                How will you provide your prescription?
                            </ModalHeader>
                            <ModalBody>                                
                                <Formik
                                    initialValues={{
                                        value: ''
                                    }}
                                    onSubmit={handleRx1Submit}
                                >
                                    <ProvideRxForm />
                                </Formik>
                            </ModalBody>
                        </Modal>
                        {/* Modal to input second set of Rx information */}
                        <Modal isOpen={modalRx3Open}>
                            <ModalHeader toggle={() => setModalRx3Open(false)}>
                                Enter your lens information:
                            </ModalHeader>
                            <ModalBody>
                                <Formik
                                    initialValues={{
                                        manuf: '',
                                        lensName: '',
                                        modality: '',
                                        baseCurve: '',
                                        diam: '',
                                        sph: '',
                                        toric: '',
                                        cyl: '',
                                        axis: '',
                                        multifocal: '',
                                        addPower: '',
                                        addDominance: '',
                                        coloredLens: '',
                                        lensColor: '',
                                        eye: ''
                                    }}
                                    onSubmit={handleRx3Submit}
                                // validate={validatePatientInfoForm1}
                                >
                                    <Form>
                                        <FormGroup>
                                            <Label htmlFor='manuf'>
                                                Manufacturer
                                            </Label>
                                            <Field
                                                name='manuf'
                                                placeholder='Manufacturer'
                                                className='form-control'
                                            >
                                            </Field>
                                            <ErrorMessage name="manuf" />
                                        </FormGroup>

                                        {items.manuf === 'Acuvue' && (
                                            <FormGroup>
                                                <Label htmlFor='lensName'>
                                                    Lens Name
                                                </Label>
                                                <Field
                                                    name='lensName'
                                                    placeholder='Lens Name'
                                                    className='form-control'
                                                >
                                                </Field>
                                                <ErrorMessage name="lensName" />
                                            </FormGroup>
                                        )}
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
                                </Formik>
                            </ModalBody>
                        </Modal>
                        {/* Modal to input ZIP code to help locate a doctor by ZIP code */}
                        <Modal isOpen={modalDrOpen}>
                            <ModalHeader toggle={() => setModalDrOpen(false)}>
                                {/* Enter the ZIP code to search: */}

                            </ModalHeader>
                            <ModalBody>
                                {/* <FindDoctorForm /> */}
                                {/* <ZipCodeModal /> */}
                                <AOAFindDoctor />
                            </ModalBody>
                        </Modal>
                    </>
                );
            })}
        </Row>
    );
};

export default HomeDisplay;