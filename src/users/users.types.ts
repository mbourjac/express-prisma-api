import type { z } from 'zod';
import type { createUserSchema } from './users.schemas.js';

export type CreateUser = z.infer<typeof createUserSchema>;
