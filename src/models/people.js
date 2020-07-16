const People = (sequelize, dataTypes) => sequelize.define('people', {
    nationalId: {
        type: dataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: dataTypes.STRING,
        allowNull: true,
    },
    lastName: {
        type: dataTypes.STRING,
        allowNull: true,
    },
    age: {
        type: dataTypes.INTEGER,
        allowNull: true,
    },
    pictureUrl: {
        type: dataTypes.STRING,
        allowNull: true,
    },
    originPlanet: {
        type: dataTypes.STRING,
        allowNull: true,
    },
},
{
    timestamps: false,
});
exports.people = People;
