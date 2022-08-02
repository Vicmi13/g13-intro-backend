/**1ra forma de implementacion */

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Role extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Role.init({
//     name: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Role',
//   });
//   return Role;
// };

/** 2da forma de implementacion */
"use strict";
const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/sequelize");

class Role extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Role.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Role",
  }
);

/** OPTIONAL */
// Role.hasOne(User);

module.exports = Role;
