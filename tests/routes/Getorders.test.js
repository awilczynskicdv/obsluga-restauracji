import { callApi } from "../helpers.js";

const PATH = `api/private/orders`;

test(`[GET] ${PATH} - valid request - should return status 200`, async () => {
  const response = await callApi("get", "/orders/all", {}, {}, false);
 expect(response.data).toMatchSnapshot();
 expect(response.status).toEqual(200);
});
