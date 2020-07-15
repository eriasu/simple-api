const { updateOneData } = require('./updateOne.data');

const updateOneService = (person, nationalId) => updateOneData(person, nationalId)
    .then((success) => success)
    .catch((error) => { throw error; });
exports.updateOneService = updateOneService;
