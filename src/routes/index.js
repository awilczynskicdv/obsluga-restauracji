import { getStatus } from "./status.js";

import {
  deleteExample,
  getExample,
  getExamples,
  patchExample,
  postExample,
} from "./example.js";

import { deleteMeal, getMeal, getMeals, patchMeal, postMeal } from "./meals.js";

import {
  deleteOrder,
  getOrder,
  getOrders,
  patchOrder,
  postOrder,
} from "./orders.js";

import { deleteBill, getBill, getBills, patchBill, postBill } from "./bills.js";

export default [
  {
    method: "GET",
    path: "/status",
    isPublic: true,
    cbs: [getStatus],
  },
  {
    method: "GET",
    path: "/example/all",
    cbs: [getExamples],
  },
  {
    method: "GET",
    path: "/example/:id",
    cbs: [getExample],
  },
  {
    method: "POST",
    path: "/example",
    cbs: [postExample],
  },
  {
    method: "PATCH",
    path: "/example",
    cbs: [patchExample],
  },
  {
    method: "DELETE",
    path: "/example/:id",
    cbs: [deleteExample],
  },

  {
    method: "GET",
    path: "/meals/all",
    cbs: [getMeals],
  },
  {
    method: "GET",
    path: "/meals/:id",
    cbs: [getMeal],
  },
  {
    method: "POST",
    path: "/meals",
    cbs: [postMeal],
  },
  {
    method: "PATCH",
    path: "/meals",
    cbs: [patchMeal],
  },
  {
    method: "DELETE",
    path: "/meals/:id",
    cbs: [deleteMeal],
  },
  {
    method: "GET",
    path: "/orders/all",
    cbs: [getOrders],
  },
  {
    method: "GET",
    path: "/orders/:id",
    cbs: [getOrder],
  },
  {
    method: "POST",
    path: "/orders",
    cbs: [postOrder],
  },
  {
    method: "PATCH",
    path: "/orders",
    cbs: [patchOrder],
  },
  {
    method: "DELETE",
    path: "/orders/:id",
    cbs: [deleteOrder],
  },
  {
    method: "GET",
    path: "/bills/all",
    cbs: [getBills],
  },
  {
    method: "GET",
    path: "/bills/:id",
    cbs: [getBill],
  },
  {
    method: "POST",
    path: "/bills",
    cbs: [postBill],
  },
  {
    method: "PATCH",
    path: "/bills",
    cbs: [patchBill],
  },
  {
    method: "DELETE",
    path: "/bills/:id",
    cbs: [deleteBill],
  },
];
