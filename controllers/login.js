
const { login } = require('../models');
const { ErrorMessages } = require('../models/Errors');
const { encrypt } = require('../controllers/encrypt');
const jwt = require('jsonwebtoken');

const loginAccount = async (userDeatils) => {
    try {
        const Login = await login.findOne({
            where: {
                email: userDeatils.email,
                password: encrypt(userDeatils.password)
            }
        })

        if (Login) return Login;
        throw new ErrorMessages(`Email or password is incorrect`)

    } catch (error) {
        if (error instanceof ErrorMessages)
            throw new ErrorMessages(`Email or password is incorrect`)
        throw new Error(`${error.message}`);
    }
}

const addNewAccount = async (userDetailsNewAcc) => {
    try {
        let Login = await login.create({
            email: userDetailsNewAcc.email,
            password: encrypt(userDetailsNewAcc.password)
        })
        return 'created Successfully'
    } catch (error) {
        throw new Error(`${error.message}`);
    }
}

module.exports = {
    loginAccount,
    addNewAccount
}