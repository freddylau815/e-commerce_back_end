// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// const Tag = require('./Tag')
// const ProductTag = require('./ProductTag')

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}
console.log('product1:', Product)
// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
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
      // allowNull: false,
      // Reference the CATEGORY to get the cat-id it belongs to
      references: {
        model: 'category',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
