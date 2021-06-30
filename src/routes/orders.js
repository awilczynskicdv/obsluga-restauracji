import { orderService } from "../services/orders.js";

export const getOrder = async (req, res) => {
  const { params } = req;
  if (!params?.id) return res.json({ data: [] });
  return res.json({ data: await orderService.read(params.id) });
};

export const getOrders = async (req, res) => {
  //console.log (await orderService.readAll())
  const data = await orderService.readAll();
  console.log(data.length);
  return res.json({ data: await orderService.readAll() });
};

export const postOrder = async (req, res) => {
  const { body } = req;
  const { table, status, created, id, price_total } = body || {};

  try {
    await orderService.create(table, status, created, id, price_total);
    res.status(201);
  } catch (err) {
    res.status(500);
  }

  return res.send();
};

export const patchOrder = async (req, res) => {
  const { body } = req;
  const { table, status, created, id, price_total } = body || {};

  const fieldsToUpdate = {};
  if (table !== undefined) fieldsToUpdate.table = table;
  if (status !== undefined) fieldsToUpdate.status = status;
  if (status !== undefined)
    fieldsToUpdate.created =
      typeof created === "string" ? created : JSON.stringify(created);
  if (price_total !== undefined) fieldsToUpdate.price_total = price_total;

  try {
    await orderService.update(id, fieldsToUpdate);
    res.status(200);
  } catch (err) {
    res.status(500);
  }

  return res.send();
};

export const deleteOrder = async (req, res) => {
  const { params } = req;
  const { id } = params || {};
  await orderService.delete(id);
  return res.send();
};
