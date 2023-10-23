"use strict";
import Sequelize from "sequelize";
import db from ".";

const Tour = db.sequelize.define(
  "tour",
  {
    title: {
      type: Sequelize.STRING,
      required: true,
      unique: true,
    },
    city: {
      type: Sequelize.STRING,
      required: true,
    },
    price: {
      type: Sequelize.INTEGER,
      required: true,
    },
    address: {
      type: Sequelize.STRING,
      required: true,
    },
    reviews: [
      {
        type: Sequelize.STRING,
        ref: "review",
      },
    ],

    featured: {
      type: Sequelize.BOOLEAN,
      default: false,
    },
    maxGroupSize: {
      type: Sequelize.INTEGER,
      required: true,
    },
    distance: {
      type: Sequelize.NUMBER,
      required: true,
    },
    desc: {
      type: Sequelize.STRING,
      required: true,
    },
  },

  {
    timestamps: true,
    freezeTableName: true,
  }
);
Tour;
module.exports = Tour;

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
