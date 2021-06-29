import {
  getAllMeals,
  getOneMeal,
  deleteMeal,
  createMeal,
  updateMeal,
} from "../models/meals.js";

export const MealService = {
  read: async (id) => (await getOneMeal({ where: { id } })) || null,
  readAll: async () => (await getAllMeals()) || [],
  create: async (id, name, category, price) =>
    await createMeal({
      id,
      name,
      category,
      price,
    }),
  update: async (id, fieldsToUpdate) =>
    await updateMeal({ where: { id } }, fieldsToUpdate),
  delete: async (id) => await deleteMeal({ where: { id } }),
};
