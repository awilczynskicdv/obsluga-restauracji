import { callApi } from "../helpers.js";

const PATH = `api/private/meals`;

test(`[GET] ${PATH} - valid request - should return status 200`, async () => {
  const response = await callApi("get", "/meals/all", {}, {}, false);
 expect(response.data).toMatchSnapshot();
 expect(response.status).toEqual(200);
});
