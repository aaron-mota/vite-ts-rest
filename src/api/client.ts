// client.ts

import { initQueryClient } from "@ts-rest/react-query";
import { contract } from "./contract";

export const client = initQueryClient(contract, {
  baseUrl: 'https://pokeapi.co/api/v2',
  baseHeaders: {},
});
