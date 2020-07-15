const { getOneData } = require('./getOne.data');

const getOneService = (nationalId) => getOneData(nationalId)
    .then((success) => success)
    .catch((error) => { throw error; });
exports.getOneService = getOneService;
