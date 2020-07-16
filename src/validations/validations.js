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
        nationalId: yup.string('the nationalId must be a string')
            .required()
            .matches(/([0-9]+-[0-9k]+)/, 'is not a nationalId, it failed the validation'),
    });
    schema.validateSync(nationalId);
};
const validatePeopleForPost = (data) => {
    const schema = yup.object().shape({
        nationalId: yup.string('the nationalId must be a string')
            .required()
            .matches(/([0-9]+-[0-9k]+)/, 'is not a nationalId, it failed the validation'),
        name: yup.string(),
        lastName: yup.string(),
        age: yup.number().integer().min(0).max(150),
        originPlanet: yup.string(),
        pictureUrl: yup.string().url(),
    });
    schema.validateSync(data);
};
const validatePeopleForPut = (data) => {
    const schema = yup.object().shape({
        nationalId: yup.string('the nationalId must be a string')
            .matches(/([0-9]+-[0-9k]+)/, 'is not a nationalId, it failed the validation'),
        name: yup.string(),
        lastName: yup.string(),
        age: yup.number().integer().min(0).max(150),
        originPlanet: yup.string(),
        pictureUrl: yup.string().url(),
    });
    schema.validateSync(data);
};
const validateJsonHeader = (headers) => {
    const schema = yup.object().shape({
        content: yup.string().matches('application/json', "it's missing the application/json headers on content-type, it failed the validation").required(),
    });
    schema.validateSync({ content: headers['content-type'] });
};

module.exports = {
    validateBody,
    validateParams,
    validateHeaders,
    validateNationalId,
    validatePeopleForPost,
    validatePeopleForPut,
    validateJsonHeader,
};
