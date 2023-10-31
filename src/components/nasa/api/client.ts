// client.ts

import { initQueryClient } from "@ts-rest/react-query";
import { contract } from "./contract";

export const client = initQueryClient(contract, {
  baseUrl: `https://api.nasa.gov/planetary/apod`,
  baseHeaders: {},
});

