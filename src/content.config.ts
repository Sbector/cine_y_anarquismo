import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    tags: z.array(z.string()).default([]),

    // Media opcional
    image: z.string().optional(),
    video: z.string().optional(),

    // Flags simples
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};