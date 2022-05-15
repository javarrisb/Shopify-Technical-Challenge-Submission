// import models
const Inventory = require('./Inventory');
const Location = require('./Location');
const Tag = require('./Tag');
const InventoryTag = require('./InventoryTag');

// Inventory belongsTo Location
Inventory.belongsTo(Location, {
    foreignKey: 'location_id'
});

// Location hasMany Inventories
Location.hasMany(Inventory, {
    foreignKey: 'inventory_id'
});

Inventory.belongsToMany(Tag, {
    through: InventoryTag,
    as: 'tag_id',
    foreignKey: 'product_id'
});

Tag.belongsToMany(Inventory, {
    through: InventoryTag,
    as: 'inventory_id',
    foreignKey: 'tag_id'
});

module.exports = {
    Inventory,
    Location,
    Tag,
    InventoryTag,
};