const { db } = require('../../../database/config');

const { people } = db;
const destroyOneData = async (id) => people.destroy({
    where: {
        nationalId: id,
    },
})
    .then((success) => success)
    .catch((error) => {
        throw error;
    });
exports.destroyOneData = destroyOneData;
