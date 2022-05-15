const seedLocation = require('./location-seeds');
const seedInventory = require('./inventory-seeds');
const seedTags = require('./tag-seeds');
const seedInventoryTags = require('./inventory-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedLocation();
    console.log('\n----- LOCATION SEEDED -----\n');

    await seedInventory();
    console.log('\n----- INVENTORY SEEDED -----\n');

    await seedTags();
    console.log('\n----- TAGS SEEDED -----\n');

    await seedInventoryTags();
    console.log('\n----- INVENTORY TAGS SEEDED -----\n');

    process.exit(0);
};

seedAll();