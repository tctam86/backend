"use strict";
import Sequelize from "sequelize";
import db from ".";

const HocSinh = db.sequelize.define(
  "hocsinh",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
HocSinh
module.exports = HocSinh;

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
