const router = require('express').Router();
const locationRoutes = require('./location-routes');
const inventoryRoutes = require('./inventory-routes');

router.use('/location', locationRoutes);
router.use('/inventory', inventoryRoutes);

module.exports = router;