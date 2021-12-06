'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Binotel2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Binotel2.init({
    name: DataTypes.STRING,
    mobile: DataTypes.STRING,
    date: DataTypes.DATE,
    ColorSmile: DataTypes.BOOLEAN,
    ord: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Binotel2',
  });
  return Binotel2;
};