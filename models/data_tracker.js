module.exports = (db, type) => {
    
    return db.define('data_tracker', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        work_space_role: {
            type: type.STRING(45)
        },
        email: {
            type: type.STRING(45)
        },
        work_space_name: {
            type: type.STRING(45)
        },
        date: {
            type: type.DATE
        },
        account_manager: {
            type: type.STRING(45)
        },
        customer: {
            type: type.STRING(45)
        },
    }, { timestamps: false, underscored: true })
}


