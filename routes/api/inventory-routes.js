const router = require('express').Router();
const { Inventory, Location, Tag, InventoryTag } = require('../../models');

// Endpoints for `/api/inventory`

// GET all inventory
router.get('/', (req, res) => {
    Inventory.findAll({
        attributes: ['id', 'inventory_name', 'price', 'stock', 'location_id'],
        include: [
            {
                model: Location,
                attributes: ['id', 'location_name']
            }
        ]
    })
        .then(dbInventoryData => res.json(dbInventoryData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET one inventory
router.get('/:id', (req, res) => {
    Inventory.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'inventory_name', 'price', 'stock', 'location_id'],
        include: [
            {
                model: Location,
                attributes: ['id', 'location_name']
            }
        ]
    })
        .then(dbInventoryData => {
            if (!dbInventoryData) {
                res.status(404).json({ message: 'No inventory was found with this id' });
                return;
            }
            res.json(dbInventoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).res.json(err);
        });
});

// create new inventory
router.post('/', (req, res) => {
    Inventory.create(req.body)
        .then(dbInventoryData => res.json(dbInventoryData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update inventory
router.put('/:id', (req, res) => {
    Inventory.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then(dbInventoryData => {
            if (!dbInventoryData) {
                res.status(404).json({ message: 'No post was found with this id' });
                return;
            }
            res.json(dbInventoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete inventory
router.delete('/:id', (req, res) => {
    Inventory.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbInventoryData => {
            if (!dbInventoryData) {
                res.status(404).json({
                    message: 'No inventory was found with this id'
                });
                return;
            }
            res.json(dbInventoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
