// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

const Category = require('./Category')
const Tag = require('./Tag')

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // Reference the CATEGORY to get the cat-id it belongs to
      references: {
        model: Category,
        key: id
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

// Product belongs to many Tag models, and Tag belongs to many Product models.
Product.belongsToMany(Tag)
Tag.belongsToMany(Product)

module.exports = Product;
