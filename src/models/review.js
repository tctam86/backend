"use strict";
import Sequelize from "sequelize";
import db from ".";

const Review = db.sequelize.define(
  "review",
  {
    productID: {
      type: Sequelize.INTEGER,
      ref: "tour",
    },
    username: {
      type: Sequelize.STRING,
      required: true,
    },
    reviewText: {
      type: Sequelize.STRING,
      required: true,
    },
    rating: {
      type: Sequelize.NUMBER,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },

  {
    timestamps: true,
    freezeTableName: true,
  }
);
Review;
module.exports = Review;
