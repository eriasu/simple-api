const { getOneService } = require('./getOne.service');

const getOneController = (id) => getOneService(id)
    .then((success) => success)
    .catch((error) => { throw new Error(error); });
exports.getOneController = getOneController;
