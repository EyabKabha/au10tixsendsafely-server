const { accounts } = require('../models');

//Get all Accounts
const getAllAccounts = async () => {
    try {
        let accountManagers = await accounts.findAll()
        return accountManagers
    } catch (error) {
        // throw new Error('No Data');
        throw new Error(`${error.message}`)
    }
}

//Add new Account
const addNewAccount = async (account) => {
    try {
        let newAccount = await accounts.create({
            first_name: account.first_name,
            last_name: account.last_name,
        })
        return 'Successfully created'
    } catch (error) {
        throw new Error(`${error.message}`);
    }
}

//Delete Account by ID
const deleteAccount = async (accountID) => {
    try {
        const isExist = await accounts.findOne({
            where: {
                id: accountID
            },
        });

        if (!isExist) throw new Error('Account Manager not found!');
        await accounts.update({}, { returning: true, where: { id: accountID } })
        return 'Successfully deleted'
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}



module.exports = { getAllAccounts, addNewAccount, deleteAccount };