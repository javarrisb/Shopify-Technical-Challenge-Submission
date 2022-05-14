const { Inventory } = require('../models');

const inventoryData = [
    {
        inventory_name: 'Air Jordans',
        price: 200.00,
        stock: 13,
        location_id: 1,
    },
    {
        inventory_name: 'Black T-Shirt',
        price: 20.00,
        stock: 25,
        location_id: 4,
    },
    {
        inventory_name: 'Snapback Hat',
        price: 30.00,
        stock: 12,
        location_id: 5,
    },
    {
        inventory_name: 'Jean Shorts',
        price: 25.00,
        stock: 40,
        location_id: 2,
    },
    {
        inventory_name: 'Beyonce Album',
        price: 15.00,
        stock: 35,
        location_id: 3,
    },
];

const seedInventory = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventory;