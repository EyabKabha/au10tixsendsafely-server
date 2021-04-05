var express = require('express');
var router = express.Router();
const { verifyToken } = require("../controllers/token");
const { ErrorMessages } = require('../models/Errors');
const jwt = require('jsonwebtoken');
const loginController = require('../controllers/login')

router.post('/', async function (req, res, next) {
    try {
        const logedin = await loginController.loginAccount(req.body)
        jwt.sign({ logedin }, 'AU10TIX@a!@Login', { expiresIn: '1h' }, (err, token) => {
            res.status(200).json({ token })
        });
    } catch (err) {
        if (err instanceof ErrorMessages)
            res.status(401).json('Email or password is incorrect')
        res.status(500).json(err.message);
    }
});

router.post('/addnew', async (req, res) => {
    try {
        const newAccount = await loginController.addNewAccount(req.body)
        res.status(200).json(newAccount)
    } catch (err) {
        res.status(500).json(err.message);
    }
})

module.exports = router;
