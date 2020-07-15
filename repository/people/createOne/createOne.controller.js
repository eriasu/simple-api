const { createOneService } = require('./createOne.service');

const createOneController = (people) => createOneService(people)
    .then((success) => {
        let jsonToReturn = {};
        if (success) {
            jsonToReturn = { status: 201, data: success };
        } else {
            jsonToReturn = { status: 400, data: "{'message':'user already created'}" };
        }
        return jsonToReturn;
    })
    .catch((error) => { throw new Error(error); });
exports.createOneController = createOneController;
