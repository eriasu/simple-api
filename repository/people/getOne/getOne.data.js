const { db } = require('../../../database/config');

const { people } = db;
const getOneData = async (id) => people.findByPk(id)
    .then((success) => success)
    .catch((error) => {
        throw error;
    });
exports.getOneData = getOneData;
