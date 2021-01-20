var express = require('express');
var router = express.Router();

var accountsController = require('../controllers/account');

router.get('/', async (req, res) => {
    try {
        const data = await accountsController.getAllAccounts()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
})


router.post('/new', async (req, res) => {
    try {
        const newAccount = await accountsController.addNewAccount(req.body)
        res.status(200).json(newAccount);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteAccount = accountsController.deleteAccount(req.params.id);
        res.status(200).json(deleteAccount);
    } catch (error) {
        res.status(500).json(error.message);
    }
})
module.exports = router