import { callApi } from "../helpers.js";

const PATH = `api/meals/all`;

test(`[GET] ${PATH} - valid request - should return status 200`, async () => {
  const response = await callApi("get", "/meals/all", {}, {}, false);
  expect(response.status).toEqual(200);
});