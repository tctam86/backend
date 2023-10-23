"use strict";
import Sequelize from "sequelize";
import db from ".";

const User = db.sequelize.define(
  "user",
  {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    photo: Sequelize.STRING,
    role: {
      type: Sequelize.STRING,
      defaultValue: "user",
    }
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);
User;
module.exports = User;

// module.exports = (sequelize) => {
//   class HocSinh extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   HocSinh.init(
//     {
//       id: Sequelize.INTEGER,
//       name: Sequelize.STRING,
//       age: Sequelize.INTEGER,
//     },
//     {
//       sequelize,
//       modelName: "hocsinh",
//     }
//   );
//   return HocSinh;
// };
