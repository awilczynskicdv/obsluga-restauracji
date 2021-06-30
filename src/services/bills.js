import {
  getBills,
  getBill,
  deleteBill,
  createBill,
  updateBill,
} from "../models/bills.js";

export const BillsService = {
  read: async (orderId) => (await getBill({ where: { orderId } })) || null,
  readAll: async () => (await getBills()) || [],
  create: async (orderId, currency, value_pln, value_currency) =>
    await createBill({
      orderId,
      currency,
      value_pln,
      value_currency,
    }),
  update: async (orderId, fieldsToUpdate) =>
    await updateBill({ where: { orderId } }, fieldsToUpdate),
  delete: async (orderId) => await deleteBill({ where: { orderId } }),
};
