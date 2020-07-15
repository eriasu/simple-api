const { destroyOneData } = require('./deleteOne.data');

const destroyOneService = (nationalId) => destroyOneData(nationalId)
    .then((success) => success)
    .catch((error) => { throw error; });
exports.destroyOneService = destroyOneService;
