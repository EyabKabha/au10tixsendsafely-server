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
        return 'created Successfully'
    } catch (error) {
        throw new Error(`${error.message}`);
    }
}

//Updte Account
const updateAccount = async (account, accountID) => {
    try {

        let isAccount = await accounts.findOne({ where: { id: accountID } });

        if (!isAccount) throw new Error('Account Manager not found!');

        account.map(async (acc) => {
            await accounts.update({
                first_name: acc.first_name,
                last_name: acc.last_name,
            }, { returning: true, where: { id: accountID } })
        })
        return 'updated Successfully';

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
        await accounts.destroy({
            where: { id: accountID }
        })
        return 'deleted Successfully';
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}

module.exports = { getAllAccounts, addNewAccount, updateAccount, deleteAccount };