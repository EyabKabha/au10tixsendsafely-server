const Sequelize = require('sequelize');


const sequelize=new Sequelize('au10tix','root','1234',{
    host:'localhost',
    dialect:'mysql'
});


module.exports=sequelize;