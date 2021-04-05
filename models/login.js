module.exports = (db, type) => {
    return db.define('login', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: type.STRING(45)
        },
        password: {
            type: type.STRING(45)
        }
    },{timestamps:false, underscored: true,freezeTableName:true})
}


