'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Items.init(
    {
      name: DataTypes.STRING,
      todos_id: {
        type: DataTypes.INTEGER,
        // cara buat relasi pakai refrence
        references: {
          model: 'Todos',
          key: 'id'
        }
      },
    },
    {
      sequelize,
      modelName: "Items",
    }
  );
  return Items;
};