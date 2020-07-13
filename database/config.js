const { Sequelize } = require('sequelize');
const { people } = require('../models/people');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'data.sqlite',
});

const db = {
    Sequelize,
    sequelize,
    people: people(sequelize, Sequelize),
};
db.people.sync({ force: true });
exports.db = db;
