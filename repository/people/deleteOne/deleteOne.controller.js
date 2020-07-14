const { destroyOneService } = require('./deleteOne.service');

const destroyOneController = (id) => destroyOneService(id)
    .then((success) => success)
    .catch((error) => { throw new Error(error); });
exports.destroyOneController = destroyOneController;
