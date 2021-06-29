import { Sequelize } from "sequelize";
import databaseProvider from "../DatabaseProvider.js";

const MODEL_NAME = "meals";

databaseProvider.defineModel(
  MODEL_NAME,
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.DataTypes.STRING,
      unique: true,
    },
    category: {
      type: Sequelize.DataTypes.STRING,
    },
    price: {
      type: Sequelize.DataTypes.FLOAT,
    },
  },
  {
    timestamps: false,
  }
);

export const getOneMeal = async (options) =>
  databaseProvider.getOne(MODEL_NAME, options);

export const getAllMeals = async () => databaseProvider.getAll(MODEL_NAME);

export const createMeal = async (options) =>
  databaseProvider.create(MODEL_NAME, options);

export const updateMeal = async (condition, fieldsToUpdate) =>
  databaseProvider.update(MODEL_NAME, condition, fieldsToUpdate);

export const deleteMeal = async (condition) =>
  databaseProvider.delete(MODEL_NAME, condition);
