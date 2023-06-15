import { Container } from "reactstrap";
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input } from 'reactstrap';
// import AnimatedHomeDisplayCard from "../features/display/AnimatedHomeDisplayCard";
// import { HOMECARDS } from "../app/shared/HOMECARDS";
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import { validateZipCode } from "../utils/validateZipCode";

const FindDoctor = () => {

    const [modalDrOpen, setModalDrOpen] = useState(false);
    const handleDrSubmit = (values) => {
        const patientZip = {
            pAddZip: values.pAddZip
        };
        console.log(patientZip);
        setModalDrOpen(false)
    };

    // Testing Dynamic
    // const initialValues = {
    //     category: "",
    //     subcategory: [],
    //   };
      
    //   const categories = [
    //     { label: "Category 1", value: "cat1" },
    //     { label: "Category 2", value: "cat2" },
    //     { label: "Category 3", value: "cat3" },
    //   ];
      
    //   const subcategories = {
    //     cat1: [
    //       { label: "Subcategory 1.1", value: "sub1.1" },
    //       { label: "Subcategory 1.2", value: "sub1.2" },
    //       { label: "Subcategory 1.3", value: "sub1.3" },
    //     ],
    //     cat2: [
    //       { label: "Subcategory 2.1", value: "sub2.1" },
    //       { label: "Subcategory 2.2", value: "sub2.2" },
    //       { label: "Subcategory 2.3", value: "sub2.3" },
    //     ],
    //     cat3: [
    //       { label: "Subcategory 3.1", value: "sub3.1" },
    //       { label: "Subcategory 3.2", value: "sub3.2" },
    //       { label: "Subcategory 3.3", value: "sub3.3" },
    //     ],
    //   };

    //   const DynamicForm = () => {
        // return (
        //   <div>
        //     <h1>Dynamic Form</h1>
        //     <Formik
        //       initialValues={initialValues}
        //       onSubmit={(values) => {
        //         console.log(values);
        //       }}
        //     >
        //       {({ values, handleSubmit, setFieldValue }) => (
        //         <Form onSubmit={handleSubmit}>
        //           <FormGroup>
        //             <Label for="category">Category</Label>
        //             <Input
        //               type="select"
        //               name="category"
        //               id="category"
        //               value={values.category}
        //               onChange={(e) => {
        //                 setFieldValue("category", e.target.value);
        //               }}
        //             >
        //               <option value="">Select a category...</option>
        //               {categories.map((category) => (
        //                 <option key={category.value} value={category.value}>
        //                   {category.label}
        //                 </option>
        //               ))}
        //             </Input>
        //           </FormGroup>
        //           {values.category && (
        //             <FieldArray>
        //               name="subcategory"
        //               render={({ push, remove }) => (
        //                 <FormGroup>
        //                   <Label for="subcategory">Subcategory</Label>
        //                   <Input
        //                     type="select"
        //                     name="subcategory"
        //                     id="subcategory"
        //                     onChange={(e) => {
        //                       push(e.target.value);
        //                     }}
        //                   >
        //                     <option value="">Select a subcategory...</option>
        //                     {subcategories[values.category].map((subcategory) => (
        //                       <option
        //                         key={subcategory.value}
        //                         value={subcategory.value}
        //                       >
        //                         {subcategory.label}
        //                       </option>
        //                     ))}
        //                   </Input>
        //                   {values.subcategory.length > 0 && (
        //                     <ul>
        //                       {values.subcategory.map((subcategory, index) => (
        //                         <li key={index}>
        //                           {subcategories[values.category].find(
        //                             (item) => item.value === subcategory
        //                           ).label}
        //                           <Button
        //                             type="button"
        //                             color="danger"
        //                             onClick={() => {
        //                               remove(index);
        //                             }}
        //                             style={{ marginLeft: "10px" }}
        //                           >
        //                             Remove
        //                           </Button>
        //                         </li>
        //                       ))}
        //                     </ul>
        //                   )}
        //                   </FormGroup>
        //               )}
        //               </FieldArray>
        //           )}
        //         </Form>)}
        //         </Formik>
        //         </div>
        // )

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

export default FindDoctor;