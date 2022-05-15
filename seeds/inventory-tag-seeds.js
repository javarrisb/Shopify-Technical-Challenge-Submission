const { InventoryTag } = require('../models');

const inventoryTagData = [
    {
        inventory_id: 1,
        tag_id: 6,
    },
    {
        inventory_id: 1,
        tag_id: 7,
    },
    {
        inventory_id: 1,
        tag_id: 5,
    },
    {
        inventory_id: 2,
        tag_id: 6,
    },
    {
        inventory_id: 3,
        tag_id: 1,
    },
    {
        inventory_id: 3,
        tag_id: 3,
    },
    {
        inventory_id: 3,
        tag_id: 4,
    },
    {
        inventory_id: 3,
        tag_id: 5,
    },
    {
        inventory_id: 4,
        tag_id: 1,
    },
    {
        inventory_id: 4,
        tag_id: 2,
    },
    {
        inventory_id: 4,
        tag_id: 8,
    },
    {
        inventory_id: 5,
        tag_id: 3,
    },
];

const seedInventoryTags = () => InventoryTag.bulkCreate(inventoryTagData);

module.exports = seedInventoryTags;