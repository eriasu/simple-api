const { db } = require('../../../database/config');

const { people } = db;
const updateOneData = async (dataToUpdate, nationalId) => people.update(dataToUpdate, {
    where: {
        nationalId,
    },
})
    .then((success) => success)
    .catch((error) => {
        throw error;
    });
exports.updateOneData = updateOneData;
