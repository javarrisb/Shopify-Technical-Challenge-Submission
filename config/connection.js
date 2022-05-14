// import Sequelize from the library
const Sequelize = require('sequelize');

const sequelize = new Sequelize('itrack_db', 'root@127.0.0.1', 'Bexjor2022$', {
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: {
        decimalNumbers: true,
    },
    port: 3306
});

module.exports = sequelize;