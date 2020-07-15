const yup = require('yup');

const validateBody = (validation) => (request, response, next) => {
    try {
        validation(request.body);
        next();
    } catch (error) {
        next(error);
    }
};

const validateParams = (validation) => (request, response, next) => {
    try {
        validation(request.params);
        next();
    } catch (error) {
        next(error);
    }
};
const validateHeaders = (validation) => (request, response, next) => {
    try {
        validation(request.headers);
        next();
    } catch (error) {
        next(error);
    }
};

const validateNationalId = (nationalId) => {
    const schema = yup.object().shape({
        nationalId: yup.string('es string')
            .required()
            .matches(/([0-9]+-[0-9k]+)/, 'numero'),
    });
    schema.validateSync(nationalId);
};
const validatePeople = (data) => {
    const schema = yup.object().shape({
        nationalId: yup.string('es string')
            .required()
            .matches(/([0-9]+-[0-9k]+)/, 'numero'),
        name: yup.string(),
        lastName: yup.string(),
        age: yup.number().integer().positive(),
        pictureUrl: yup.string().url(),
    });
    schema.validateSync(data);
};
const validateJsonHeader = (headers) => {
    const schema = yup.object().shape({
        content: yup.string().matches('application/json', 'es json').required(),
    });
    schema.validateSync({ content: headers['content-type'] });
};

module.exports = {
    validateBody,
    validateParams,
    validateHeaders,
    validateNationalId,
    validatePeople,
    validateJsonHeader,
};
