import "server-only"; // Make sure you can't import this on client

import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(() => {
      return { name: "Hello world." };
      //
    }),

  delete: publicProcedure.input(z.object({ id: z.number() })).mutation(() => {
    return { name: "Hello world" };
  }),

  getPosts: publicProcedure.query(() => {
    return { name: "Hello" };
  }),
});
