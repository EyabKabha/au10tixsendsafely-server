
const Sequelize = require('sequelize');
const db = require('../config/database');

// model account
const Accounts = require('./accounts');

const accounts = Accounts(db, Sequelize);

module.exports = {
    accounts
}