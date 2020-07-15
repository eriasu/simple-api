const { db } = require('../../../database/config');

const { people } = db;
const updateOneData = async (user, nationalId) => people.update(user, {
    where: {
        nationalId,
    },
})
    .then((success) => success)
    .catch((error) => {
        throw error;
    });
exports.updateOneData = updateOneData;
