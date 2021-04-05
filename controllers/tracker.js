
const { data_tracker } = require('../models');

const allDataTracker = async () => {
    try {
        let dataAM = await data_tracker.findAll()
        return dataAM

    } catch (error) {
        throw new Error(`${error.message}`);
    }
}

const addNewData = async (tracker) => {
    try {
        let newDataAdded = await data_tracker.create({

            work_space_role: tracker.work_space_role,
            email: tracker.email,
            work_space_name: tracker.work_space_name,
            date: tracker.date,
            account_manager: tracker.account_manager,
            customer: tracker.customer

        })
        return 'created Successfully'
    } catch (error) {
        throw new Error(`${error.message}`);
    }
}

const updateTracker = async (trackerData, trackerID) => {
    try {
        let isDataTracker = await data_tracker.findOne({ where: { id: trackerID } })

        if (!isDataTracker) throw new Error('Customer not found');
        trackerData.map(async (customerData) => {
            await data_tracker.update({
                work_space_role: customerData.work_space_role,
                email: customerData.email,
                work_space_name: customerData.work_space_name,
                date: customerData.date,
                account_manager: customerData.account_manager,
                customer: customerData.customer
            }, { returning: true, where: { id: trackerID } })
        })
        return 'updated Successfully';
    } catch (error) {
        throw new Error(`${error.message}`);
    }
}

const deleteTrackerByID = async (trackerId) => {
    try {
        const isExistTracker = await data_tracker.findOne({
            where: {
                id: trackerId
            },
        });
        if (!isExistTracker) throw new Error('Customer not found!');

        await data_tracker.destroy({
            where: { id: trackerId }
        })
        return 'deleted Successfully';
    } catch (error) {

    }
}
module.exports = { allDataTracker, addNewData, deleteTrackerByID ,updateTracker}