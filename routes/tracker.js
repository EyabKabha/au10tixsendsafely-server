
var express = require('express');
var router = express.Router();
var trackerController = require('../controllers/tracker');

const { verifyToken } = require("../controllers/token");
const jwt = require('jsonwebtoken');

router.get('/', verifyToken, async (req, res) => {
    try {
        jwt.verify(req.token, 'AU10TIX@a!@Login', async (err, auth) => {
            if (err) {
                res.sendStatus(403);
            } else {
                const allData = await trackerController.allDataTracker()
                res.status(200).json(allData);
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
                const addData = await trackerController.addNewData(req.body)
                res.status(200).json(addData);
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
                const deleteTracker = await trackerController.updateTracker(req.body, req.params.id)
                res.status(200).json(deleteTracker);
            }
        })
    } catch (error) {
        res.status(500).json(error.message);
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const deleteTracker = await trackerController.deleteTrackerByID(req.params.id);
        res.status(200).json(deleteTracker);

    } catch (error) {
        res.status(500).json(error.message);
    }
})
module.exports = router