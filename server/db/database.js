

// entry point for the database. It is responsible for creating the Sequelize instance and connecting to the database.


const Sequelize = require("sequelize");
const pkg = require("../../package.json");


const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
    logging: false
});

module.exports = db;
