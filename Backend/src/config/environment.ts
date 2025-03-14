import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().default("4000"),
  NODE_ENV: z.enum(["development", "production", "test"]),
  JWT_SECRET: z.string().min(32),
  DATABASE_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
