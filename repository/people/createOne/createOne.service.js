const { createOneData } = require('./createOne.data');

const createOneService = (person) => createOneData(person)
    .then((success) => success)
    .catch((error) => { throw error; });
exports.createOneService = createOneService;
