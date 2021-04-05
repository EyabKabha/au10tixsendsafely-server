var express = require('express');
var router = express.Router();
const { verifyToken } = require("../controllers/token");
var accountsController = require('../controllers/account');
const jwt = require('jsonwebtoken');

router.get('/', verifyToken, async (req, res) => {
    try {
        jwt.verify(req.token, 'AU10TIX@a!@Login', async (err, auth) => {
            if (err) {
                res.sendStatus(403);
            } else {
                const data = await accountsController.getAllAccounts()
                res.status(200).json(data)
            }
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
})


router.post('/new', verifyToken, async (req, res) => {
    try {
        jwt.verify(req.token, 'AU10TIX@a!@Login', async (err, auth) => {
            if (err) {
                res.sendStatus(403);
            } else {
                const newAccount = await accountsController.addNewAccount(req.body)
                res.status(200).json(newAccount);
            }
        })
    } catch (error) {
        res.status(500).json(error.message);
    }
})

router.put('/edit/:id', verifyToken, async (req, res) => {
    try {
        jwt.verify(req.token, 'AU10TIX@a!@Login', async (err, auth) => {
            if (err) {
                res.sendStatus(403);
            } else {
                const account = await accountsController.updateAccount(req.body, req.params.id)
                res.status(200).json(account);
            }
        })

    } catch (error) {
        res.status(500).json(error.message);
    }
})
router.delete('/delete/:id', async (req, res) => {
    try {
        const deleteAccount = accountsController.deleteAccount(req.params.id);
        res.status(200).json(deleteAccount);
    } catch (error) {
        res.status(500).json(error.message);
    }
})
module.exports = router