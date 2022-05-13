// import vital parts of the sequelize library
const { Model, DataTypes } = require('sequelize');
// import the database connection from config.js
const sequelize = require('../config/connection');

// Load Inventory model by extending off Sequelize's Model class
class Inventory extends Model { }

// organize fields and rules for Inventory model
Inventory.init(
    {
        // describe columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        inventory_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: trueprice
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
            validate: {
                isNumeric: true
            }
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'location',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'inventory',
    }
);

module.exports = Inventory;