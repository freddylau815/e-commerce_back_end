const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

const Product = require('./Product.js')

class Category extends Model {}

Category.init(
  {
    // define columns
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:{
        args: true,
        message: 'Category already exists!'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// Category can have multiple products but a product can only belong to one category
// PRODUCT belongs to CATEGORY, and CATEGORY has many PRODUCT models
Category.hasMany(Product)
Product.belongsTo(Category)

module.exports = Category;
