import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const schema = z.object({
  copyright: z.string(),
  date: z.string(),
  explanation: z.string(),
  hdurl: z.string(),
  media_type: z.string(),
  service_version: z.string(),
  title: z.string(),
  url: z.string(),
});

export type TDoc = z.infer<typeof schema>;

export const contract = c.router({
  getAll: {
    method: 'GET',
    path: '/',
    query: z.object({
      api_key: z.string(),
      count: z.number().optional(),
    }),
    responses: {
      200: c.type<TDoc[]>(),
    },
    summary: 'Get all',
  },
});
