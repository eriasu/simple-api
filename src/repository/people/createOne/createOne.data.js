const { db } = require('../../../database/config');

const { people } = db;
const createOneData = async (peopleData) => people.create(peopleData)
    .then((success) => success)
    .catch((error) => {
        throw error;
    });
exports.createOneData = createOneData;
