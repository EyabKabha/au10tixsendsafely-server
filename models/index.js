
const Sequelize = require('sequelize');
const db = require('../config/database');

// model account
const Accounts = require('./accounts');
const accounts = Accounts(db, Sequelize);

//model data_tracker

const DataTracker = require('./data_tracker');
const data_tracker = DataTracker(db,Sequelize);

module.exports = {
    accounts,
    data_tracker,
}