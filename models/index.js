
const Sequelize = require('sequelize');
const db = require('../config/database');

// model account
const Accounts = require('./accounts');
const accounts = Accounts(db, Sequelize);

//model data_tracker

const DataTracker = require('./data_tracker');
const data_tracker = DataTracker(db,Sequelize);

const Login = require('./login');
const login = Login(db,Sequelize);

module.exports = {
    accounts,
    data_tracker,
    login
}