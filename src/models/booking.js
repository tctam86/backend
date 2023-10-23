"use strict";
import Sequelize from "sequelize";
import db from ".";

const Booking = db.sequelize.define(
  "booking",
  {
    userId: Sequelize.STRING,
    userEmail: Sequelize.STRING,
    tourName: Sequelize.STRING,
    fullName: Sequelize.STRING,
    guestSize: Sequelize.NUMBER,
    phone: [
      {
        type: Sequelize.NUMBER,
        required: true,
      },
    ],
    bookAt: [
      {
        type: Sequelize.DATE,
        required: true,
      },
    ],
  },

  {
    timestamps: true,
    freezeTableName: true,
  }
);
Booking;
module.exports = Booking;
