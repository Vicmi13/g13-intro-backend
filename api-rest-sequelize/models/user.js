/**1ra forma de implementacion */

// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }

//   User.init(
//     {
//       firstName: DataTypes.STRING,
//       lastName: DataTypes.STRING,
//       email: DataTypes.STRING,
//     },
//     {
//       sequelize,
//       modelName: "User",
//     }
//   );
//   return User;
// };

/** 2da forma de implementacion */
"use strict";
const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/sequelize");
const Role = require("./role");

class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

User.init(
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

User.belongsTo(role);
Role.hasOne(User);

module.exports = User;
