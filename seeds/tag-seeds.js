const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'hip hop music',
    },
    {
        tag_name: 'pop music',
    },
    {
        tag_name: 'gold',
    },
    {
        tag_name: 'white',
    },
    {
        tag_name: 'green',
    },
    {
        tag_name: 'red',
    },
    {
        tag_name: 'blue',
    },
    {
        tag_name: 'social media'
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;