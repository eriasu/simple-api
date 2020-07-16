const { getOneService } = require('./getOne.service');

const getOneController = (nationalId) => getOneService(nationalId)
    .then((success) => {
        let jsonToReturn = {};
        if (success) {
            jsonToReturn = { status: 200, data: success };
        } else {
            jsonToReturn = { status: 404, data: "{'message':'person not found'}" };
        }
        return jsonToReturn;
    })
    .catch((error) => { throw new Error(error); });
exports.getOneController = getOneController;
