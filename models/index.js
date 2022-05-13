// import models
const Inventory = require('./Inventory');
const Location = require('./Location');

// Inventory belongsTo Location
Inventory.belongsTo(Location, {
    foreignKey: 'location_id'
});

// Location hasMany Inventories
Location.hasMany(Inventory, {
    foreignKey: 'inventory_id'
});

module.exports = {
    Inventory,
    Location
};