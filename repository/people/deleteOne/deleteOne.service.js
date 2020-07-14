const { destroyOneData } = require('./deleteOne.data');

const destroyOneService = (id) => destroyOneData(id)
    .then((success) => success)
    .catch((error) => { throw error; });
exports.destroyOneService = destroyOneService;
