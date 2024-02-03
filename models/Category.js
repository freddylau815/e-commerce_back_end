const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

const Product = require('./Product')

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
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
Category.hasMany(Product, {
  foreignKey: 'category_id',
  sourceKey: 'id'
})
Product.belongsTo(Category)

module.exports = Category;
