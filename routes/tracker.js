
var express = require('express');
var router = express.Router();
var trackerController = require('../controllers/tracker');

router.get('/', async (req, res) => {
    try {
        const allData = await trackerController.allDataTracker()
        res.status(200).json(allData);
    } catch (error) {
        res.status(500).json(error.message)
    }
})

router.post('/new', async (req, res) => {
    try {
        const addData = await trackerController.addNewData(req.body)
        res.status(200).json(addData);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
        const deleteTracker = await trackerController.updateTracker(req.body, req.params.id)
        res.status(200).json(deleteTracker);
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