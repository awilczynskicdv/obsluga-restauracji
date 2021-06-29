import { getStatus } from "./status.js";

import {
  deleteExample,
  getExample,
  getExamples,
  patchExample,
  postExample,
} from "./example.js";

import { deleteMeal, getMeal, getMeals, patchMeal, postMeal } from "./meals.js";

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
];
