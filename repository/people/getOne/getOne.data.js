const { db } = require('../../../database/config');

const { people } = db;
const getOneData = async (nationalId) => people.findByPk(nationalId)
    .then((success) => success)
    .catch((error) => {
        throw error;
    });
exports.getOneData = getOneData;
