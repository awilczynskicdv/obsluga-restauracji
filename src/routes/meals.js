import { MealService } from "../services/meals.js";

export const getMeal = async (req, res) => {
  const { params } = req;
  if (!params?.id) return res.json({ data: [] });
  return res.json({ data: await MealService.read(params.id) });
};

export const getMeals = async (req, res) => {
  const data = await MealService.readAll();
  if (data.length < 12) {
    return res.send("Not enough meals in menu");
  } else {
    return res.json({ data: await MealService.readAll() });
  }
};

export const postMeal = async (req, res) => {
  const { body } = req;
  const { id, name, category, price } = body || {};

  try {
    await MealService.create(id, name, category, price);
    res.status(201);
  } catch (err) {
    res.status(500);
  }

  return res.send();
};

export const patchMeal = async (req, res) => {
  const { body } = req;
  const { id, name, category, price } = body || {};

  const fieldsToUpdate = {};
  if (name !== undefined) fieldsToUpdate.name = name;
  if (category !== undefined)
    fieldsToUpdate.category =
      typeof category === "string" ? category : JSON.stringify(category);
  if (price !== undefined) fieldsToUpdate.price = price;

  try {
    await MealService.update(id, fieldsToUpdate);
    res.status(200);
  } catch (err) {
    res.status(500);
  }

  return res.send();
};

export const deleteMeal = async (req, res) => {
  const { params } = req;
  const { id } = params || {};
  await MealService.delete(id);
  return res.send();
};
