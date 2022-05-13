const router = require('express').Router();
const { Location, Inventory } = require('../../models');

// Endpoints for `/api/location` 

// GET all locations
router.get('/', (req, res) => {
    Location.findAll({
        attributes: ['id', 'location_name'],
        include: [
            {
                model: Inventory,
                attributes: ['id', 'inventory_name', 'price', 'stock', 'location_id']
            }
        ]
    })
        .then(dbLocationData => res.json(dbLocationData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET one location
router.get('/:id', (req, res) => {
    Location.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'location_name'],
        include: [
            {
                model: 'Inventory',
                attributes: ['id', 'inventory_name', 'price', 'stock', 'location_name']
            }
        ]
    })
        .then(dbLocationData => {
            if (!dbLocationData) {
                res.status(404).json({ message: 'No location was found for this id' });
                return;
            }
            res.json(dbLocationData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create a location
router.post('/', (req, res) => {
    Location.create({
        location_id: req.body.location_id,
        location_name: req.body.location_name
    })
        .then(dbLocationData => res.json(dbLocationData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update location
router.put('/:id', (req, res) => {
    Location.update(
        {
            location_id: req.body.location_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbLocationData => {
            if (!dbLocationData) {
                res.status(404).json({ message: 'No location was found with this id' });
                return;
            }
            res.json(dbLocationData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete location
router.delete('/:id', (req, res) => {
    Location.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbLocationData => {
            if (!dbLocationData) {
                res.status(404).json({ message: 'No location was found with this id' });
                return;
            }
            res.json(dbLocationData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;

