const { db } = require('../../../database/config');

const { people } = db;
const getAllData = async () => people.findAll()
    .then((success) => success)
    .catch((error) => {
        throw error;
    });
exports.getAllData = getAllData;
