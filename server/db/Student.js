const Sequelize = require('sequelize');
const db = require('./database');


const Student = db.define('student',{
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true,
        }
    },
    campusId:{
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    gpa: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: true,
            max: 4.0,
            min: 0.0,
        }
    }
})

module.exports = Student;