import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const PokemonSchema = z.object({
  name: z.string(),
  url: z.string(),
});

type PokemonType = z.infer<typeof PokemonSchema>;

export const contract = c.router({
  getAll: {
    method: 'GET',
    path: '/pokemon',
    query: z.object({
      limit: z.number().optional(),
      // take: z.number().optional(),
      // skip: z.number().optional(),
      // search: z.string().optional(),
    }),
    responses: {
      200: c.type<{
        count: number;
        next: string;
        previous: string | null;
        results: PokemonType[];
      }>(),
    },
    summary: 'Get all',
  },
  getSingle: {
      method: 'GET',
      path: '/pokemon/:id',
      query: null,
      responses: {
        // 200: PokemonSchema.nullable(),
        200: c.type<{
          id: number;
          name: string;
          sprites: {
            front_default: string;
          };
        }>(),
      },
      // pathParams: z.object({
      //   id: z.string(),
      // }),
      // query: z.object({
        // id: 
        // take: z.number().optional(),
        // skip: z.number().optional(),
        // search: z.string().optional(),
      // }),
      summary: 'Get single',
    },
});


// export const contract = c.router({
//   getPosts: {
//     method: 'GET',
//     path: `/posts`,
//     responses: {
//       200: z.array(PostSchema),
//     },
//     summary: 'Get a post by id',
//   },
//   getPost: {
//     method: 'GET',
//     path: `/posts/:id`,
//     responses: {
//       200: PostSchema.nullable(),
//     },
//     summary: 'Get a post by id',
//   },

//   createPost: {
//     method: 'POST',
//     path: '/posts',
//     responses: {
//       201: PostSchema,
//     },
//     body: PostSchema.omit({ id: true }),
//     summary: 'Create a post',
//     description: "helloooooo",
//   },
// });