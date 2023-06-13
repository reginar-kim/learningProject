
const Sequelize = require("sequelize");
const db = require('./database');



const Campus = db.define('campus',{
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
   
    image: {
        type: Sequelize.STRING, 
        defaultValue: "https://icons8.com/icon/1CbCOtKH87xx/we-can-do-it",
        allowNull: false,
    }
});

module.exports = Campus;