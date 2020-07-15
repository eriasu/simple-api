const { destroyOneService } = require('./deleteOne.service');

const destroyOneController = (nationalId) => destroyOneService(nationalId)
    .then((success) => {
        let jsonToReturn = {};
        if (success === 1) {
            jsonToReturn = { status: 200, data: "{'message':'user deleted'}" };
        } else {
            jsonToReturn = { status: 404, data: "{'message':'user not found'}" };
        }
        return jsonToReturn;
    })
    .catch((error) => { throw new Error(error); });
exports.destroyOneController = destroyOneController;
