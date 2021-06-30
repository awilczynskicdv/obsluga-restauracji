import { BillsService } from "../services/bills.js";

export const getBill = async (req, res) => {
  const { params } = req;
  if (!params?.id) return res.json({ data: [] });
  const data = await BillsService.read(params.id);
  const currency = data.currency;
  const API_URL = `http://api.nbp.pl/api/exchangerates/rates/A/${currency}/`;
  console.log(API_URL);

  return res.json({ data: await BillsService.read(params.id) });
};

export const getBills = async (req, res) => {
  return res.json({ data: await BillsService.readAll() });
};

export const postBill = async (req, res) => {
  const { body } = req;
  const { orderId, currency, value_pln, value_currency } = body || {};

  try {
    await BillsService.create(orderId, currency, value_pln, value_currency);
    res.status(201);
  } catch (err) {
    res.status(500);
  }

  return res.send();
};

export const patchBill = async (req, res) => {
  const { body } = req;
  const { orderId, currency, value_pln, value_currency } = body || {};

  const fieldsToUpdate = {};
  if (currency !== undefined) fieldsToUpdate.currency = currency;
  if (value_pln !== undefined) fieldsToUpdate.value_pln = value_pln;
  if (value_currency !== undefined)
    fieldsToUpdate.value_currency = value_currency;

  try {
    await BillsService.update(orderId, fieldsToUpdate);
    res.status(200);
  } catch (err) {
    res.status(500);
  }

  return res.send();
};

export const deleteBill = async (req, res) => {
  const { params } = req;
  const { id } = params || {};
  await BillsService.delete(id);
  return res.send();
};
