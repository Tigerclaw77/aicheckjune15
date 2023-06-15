export const validatePatientInfoForm1 = (values) => {
    const errors = {};

    if (!values.pFName) {
        errors.pFName = 'Required';
    } else if (values.pFName.length < 2) {
        errors.pFName = 'Must be at least 2 characters.';
    } else if (values.pFName.length > 20) {
        errors.pFName = 'Must be 20 characters or less';
    }

    if (!values.pLName) {
        errors.pLName = 'Required';
    } else if (values.pLName.length < 2) {
        errors.pLName = 'Must be at least 2 characters.';
    } else if (values.pLName.length > 20) {
        errors.pLName = 'Must be 20 characters or less';
    }

    if (!values.pAddStr1) {
        errors.pAddStr1 = 'Required';
    } else if (values.pAddStr1.length < 2) {
        errors.pAddStr1 = 'Must be at least 2 characters.';
    } else if (values.pAddStr1.length > 40) {
        errors.pAddStr1 = 'Must be 40 characters or less';
    }

    if (values.pAddStr2.length > 40) {
        errors.pAddStr2 = 'Must be 40 characters or less';
    }

    if (!values.pAddCty) {
        errors.pAddCty = 'Required';
    } else if (values.pAddCty.length < 2) {
        errors.pAddCty = 'Must be at least 2 characters.';
    } else if (values.pAddCty.length > 20) {
        errors.pAddCty = 'Must be 20 characters or less';
    }

    if (!values.pAddSt) {
        errors.pAddSt = 'Required';
    } else if (values.pAddSt.length !== 2) {
        errors.pAddSt = 'Must use 2 character abbreviation.';
    }

    const reg = /^\d+$/;
    if (!reg.test(values.pAddZip)) {
        errors.pAddZip = 'The ZIP code should contain only numbers.'
    } else if (values.pAddZip.length !== 5) {
        errors.pAddZip = 'The ZIP code should be five digits long.'
    };


    // const reg = /^\d+$/;
    // if (!reg.test(values.phoneNum)) {
    //     errors.phoneNum = 'The phone number should contain only numbers.';
    // }

    // if (!values.email.includes('@')) {
    //     errors.email = 'Email should contain a @';
    // }

    return (errors);
};