const People = (sequelize, dataTypes) => sequelize.define('people', {
    nationalId: {
        type: dataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: dataTypes.STRING,
    },
    lastName: {
        type: dataTypes.STRING,
    },
    age: {
        type: dataTypes.INTEGER,
    },
    pictureUrl: {
        type: dataTypes.STRING,
    },
});
exports.people = People;
