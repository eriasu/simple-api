const { db } = require('../../../database/config');

const { people } = db;
const destroyOneData = async (nationalId) => people.destroy({
    where: {
        nationalId,
    },
})
    .then((success) => success)
    .catch((error) => {
        throw error;
    });
exports.destroyOneData = destroyOneData;
