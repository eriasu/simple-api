const { getOneData } = require('./getOne.data');

const getOneService = (id) => getOneData(id)
    .then((success) => success)
    .catch((error) => { throw error; });
exports.getOneService = getOneService;
