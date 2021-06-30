import {
  getOrders,
  getOrder,
  deleteOrder,
  createOrder,
  updateOrder,
} from "../models/orders.js";

export const orderService = {
  read: async (id) => (await getOrder({ where: { id } })) || null,
  readAll: async () => (await getOrders()) || [],
  create: async (table, status, created, id, price_total) =>
    await createOrder({
      table,
      status,
      created,
      id,
      price_total,
    }),
  update: async (id, fieldsToUpdate) =>
    await updateOrder({ where: { id } }, fieldsToUpdate),
  delete: async (id) => await deleteOrder({ where: { id } }),
};
