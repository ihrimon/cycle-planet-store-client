import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Password is required' })
    .min(0, 'Email is required'),
  password: z.string({ required_error: 'Password is required' }),
});
