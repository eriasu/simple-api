const { getAllData } = require('./getAll.data');

const getAllService = () => getAllData()
    .then((success) => success)
    .catch((error) => { throw error; });
exports.getAllService = getAllService;
