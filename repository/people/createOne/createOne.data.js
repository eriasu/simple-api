const { db } = require('../../../database/config');

const { people } = db;
const createOneData = async (user) => people.create(user)
    .then((success) => success)
    .catch((error) => {
        throw error;
    });
exports.createOneData = createOneData;
