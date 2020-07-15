const { getAllService } = require('./getAll.service');

const getAllController = () => getAllService()
    .then((success) => success)
    .catch((error) => { throw new Error(error); });
exports.getAllController = getAllController;
