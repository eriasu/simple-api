const { updateOneData } = require('./updateOne.data');

const updateOneService = (people, nationalId) => updateOneData(people, nationalId)
    .then((success) => success)
    .catch((error) => { throw error; });
exports.updateOneService = updateOneService;
