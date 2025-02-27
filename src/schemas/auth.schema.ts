import { z } from 'zod';

const emailSchema = z
  .string({ required_error: 'Email is required' })
  .email('Invalid email address');

const passwordSchema = z
  .string()
  .min(6, 'Password must be at least 6 characters long')
  .max(20, 'Password should not exceed 20 characters');

export const signupSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name should not exceed 30 characters'),
  email: emailSchema,
  password: passwordSchema,
});

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
