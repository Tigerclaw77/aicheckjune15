import { Container } from "reactstrap";
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input } from 'reactstrap';
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import { validateZipCode } from "../utils/validateZipCode";

const FindDoctorForm = () => {

    const [modalDrOpen, setModalDrOpen] = useState(false);
    const handleDrSubmit = (values) => {
        const patientZip = {
            pAddZip: values.pAddZip
        };
        console.log(patientZip);
        setModalDrOpen(false)
    };

    return (
        <Formik
            initialValues={{ pAddZip: null }}
            onSubmit={handleDrSubmit}
            validate={validateZipCode}
        >
            <Form>
                <FormGroup>
                    <Field
                        name='pAddZip'
                        placeholder='ZIP Code'
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
    );
};

export default FindDoctorForm;