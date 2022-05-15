const router = require('express').Router();
const { Tag, Inventory, InventoryTag } = require('../../models');
const { route } = require('./location-routes');

// Endpoints for `/api/tags`

// GET all tags
router.get('/', (req, res) => {
    Tag.findAll({
        attributes: ['id', 'tag_name'],
        include: [
            {
                model: Inventory,
                attributes: ['id', 'inventory_name', 'price', 'stock', 'location_id']
            }
        ]
    })
        .then(dbTagData => res.json(dbTagData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET single tag by id
router.get('/:id', (req, res) => {
    Tag.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'tag_name'],
        include: [
            {
                model: Inventory,
                attributes: ['id', 'inventory_name', 'price', 'stock', 'location_id']
            }
        ]
    })
        .then(dbTagData => {
            if (!dbTagData) {
                res.status(404).json({ message: 'No tag was found on this id' });
                return;
            }
            res.json(dbTagData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create new tag
router.post('/', (req, res) => {
    Tag.create({
        tag_id: req.body.tag_id,
        tag_name: req.body.tag_name
    })
        .then(dbTagData => res.json(dbTagData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update tag name
router.put('/:id', (req, res) => {
    Tag.update(
        {
            tag_id: req.body.tag_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbTagData => {
            if (!dbTagData) {
                res.status(404).json({ message: 'No tag was found on this id' });
                return;
            }
            res.json(dbTagData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete tag 
router.delete('/:id', (req, res) => {
    Tag.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbTagData => {
            if (!dbTagData) {
                res.status(404).json({ message: 'No tag was found on this id' });
                return;
            }
            res.json(dbTagData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;