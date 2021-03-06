'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShoppingCart = sequelize.define('ShoppingCart', {
    userId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  ShoppingCart.associate = function(models) {
    ShoppingCart.belongsTo(models.User, { foreignKey: "userId" }),
    ShoppingCart.belongsToMany(models.Listing, {
      through: 'ShoppingCartListing',
      otherKey: 'listingId',
      foreignKey: 'shoppingCartId'
    })
  };
  return ShoppingCart;
};