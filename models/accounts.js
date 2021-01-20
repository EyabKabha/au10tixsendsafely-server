module.exports = (db, type) => {
    return db.define('accounts', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: type.STRING(45)
        },
        last_name: {
            type: type.STRING(45)
        }
    },{timestamps:false, underscored: true})
}


