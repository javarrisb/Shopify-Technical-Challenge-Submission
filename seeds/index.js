const seedLocation = require('./location-seeds');
const seedInventory = require('./inventory-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedLocation();
    console.log('\n----- LOCATION SEEDED -----\n');

    await seedInventory();
    console.log('\n----- INVENTORY SEEDED -----\n');

    process.exit(0);
};

seedAll();