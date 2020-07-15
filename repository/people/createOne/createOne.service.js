const { createOneData } = require('./createOne.data');
const { getOneData } = require('../getOne/getOne.data');

const createOneService = (people) => getOneData(people.nationalId)
    .then((personData) => {
        if (personData === null) {
            return createOneData(people)
                .then((success) => success)
                .catch((error) => { throw error; });
        }
        return false;
    })
    .catch((error) => { throw error; });
exports.createOneService = createOneService;
