const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class InventoryTag extends Model { }

InventoryTag.init(
    {
        // describe columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        inventory_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'inventory',
                key: 'id'
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tag',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'inventory_tag',
    }
);

module.exports = InventoryTag;