const { Location } = require('../models');

const locationData = [
    {
        location_name: 'Shoes',
    },
    {
        location_name: 'Shirts',
    },
    {
        location_name: 'Hats',
    },
    {
        location_name: 'Shorts',
    },
    {
        location_name: 'Music',
    },
];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;