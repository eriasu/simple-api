const { createOneService } = require('./createOne.service');

const createOneController = (person) => createOneService(person)
    .then((success) => success)
    .catch((error) => { throw new Error(error); });
exports.createOneController = createOneController;
