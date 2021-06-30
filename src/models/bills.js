// src/models/example.js

import { Sequelize } from "sequelize";
import databaseProvider from "../DatabaseProvider.js";

const MODEL_NAME = "bills";

databaseProvider.defineModel(
  MODEL_NAME,
  {
    orderId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    currency: {
      type: Sequelize.DataTypes.STRING,
      unique: true,
    },
    value_pln: {
      type: Sequelize.DataTypes.FLOAT,
    },
    value_currency: {
      type: Sequelize.DataTypes.FLOAT,
    },
  },
  {
    timestamps: false,
  }
);

export const getBill = async (options) =>
  databaseProvider.getOne(MODEL_NAME, options);

export const getBills = async () => databaseProvider.getAll(MODEL_NAME);

export const createBill = async (options) =>
  databaseProvider.create(MODEL_NAME, options);

export const updateBill = async (condition, fieldsToUpdate) =>
  databaseProvider.update(MODEL_NAME, condition, fieldsToUpdate);

export const deleteBill = async (condition) =>
  databaseProvider.delete(MODEL_NAME, condition);
