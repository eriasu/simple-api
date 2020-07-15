const { updateOneService } = require('./updateOne.service');

const updateOneController = (person, nationalId) => updateOneService(person, nationalId)
    .then((success) => {
        let jsonToReturn = {};
        if (success[0] === 1) {
            jsonToReturn = { status: 200, data: "{'message':'user updated'}" };
        } else {
            jsonToReturn = { status: 404, data: "{'message':'user not found'}" };
        }
        return jsonToReturn;
    })
    .catch((error) => { throw new Error(error); });
exports.updateOneController = updateOneController;
