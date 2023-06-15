export const validateZipCode = (values) => {
    const errors = {};

    const reg = /^\d+$/;
    if (!reg.test(values.pAddZip)) {
        errors.pAddZip = 'The ZIP code should contain only numbers.'
    } else if (values.pAddZip.length !== 5) {
        errors.pAddZip = 'The ZIP code should be five digits long.'
    };

    return (errors);
};