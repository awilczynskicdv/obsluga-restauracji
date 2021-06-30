import { Sequelize } from "sequelize";
import databaseProvider from "../DatabaseProvider.js";

const MODEL_NAME = "orders";

databaseProvider.defineModel(
  MODEL_NAME,
  {
    table: {
      type: Sequelize.DataTypes.STRING,
    },
    status: {
      type: Sequelize.DataTypes.STRING,
    },
    created: {
      type: Sequelize.DataTypes.STRING,
    },
    id: {
      type: Sequelize.DataTypes.FLOAT,
      primaryKey: true,
      allowNull: false,
    },
    price_total: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export const getOrder = async (options) =>
  databaseProvider.getOne(MODEL_NAME, options);

export const getOrders = async () => databaseProvider.getAll(MODEL_NAME);

export const createOrder = async (options) =>
  databaseProvider.create(MODEL_NAME, options);

export const updateOrder = async (condition, fieldsToUpdate) =>
  databaseProvider.update(MODEL_NAME, condition, fieldsToUpdate);

export const deleteOrder = async (condition) =>
  databaseProvider.delete(MODEL_NAME, condition);
