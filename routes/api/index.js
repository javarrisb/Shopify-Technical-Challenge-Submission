const router = require('express').Router();
const locationRoutes = require('./location-routes');
const inventoryRoutes = require('./inventory-routes');
const tagRoutes = require('./tag-routes');

router.use('/location', locationRoutes);
router.use('/inventory', inventoryRoutes);
router.use('/tags', tagRoutes);

module.exports = router;