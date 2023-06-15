import React, { useState } from 'react';
import { Col, Row, Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const ManualRxForm = () => {

    return (
        <Form>
            <FormGroup>
                <Label htmlFor='pFName'>
                    Patient Name (manual)
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
    )
};

export default ManualRxForm;