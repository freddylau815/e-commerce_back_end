const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

const Product = require('./Product')

class Tag extends Model {}

Tag.init(
  {
    // define columns
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// Product belongs to many Tag models, and Tag belongs to many Product models.
Product.belongsToMany(Tag)
Tag.belongsToMany(Product)

module.exports = Tag;
