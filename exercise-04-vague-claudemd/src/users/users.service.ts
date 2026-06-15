import { z } from 'zod';
import { Result, ok, err } from '../types';

// Input validation schema (Zod)
const CreateUserSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

// In-memory store for the exercise
const users: User[] = [];

export function createUser(input: unknown): Result<User> {
  const parsed = CreateUserSchema.safeParse(input);
  if (!parsed.success) {
    return err(parsed.error.errors[0].message);
  }

  const user: User = {
    id: crypto.randomUUID(),
    name: parsed.data.name,
    email: parsed.data.email,
    createdAt: new Date(),
  };

  users.push(user);
  return ok(user);
}

export function getUserById(id: string): Result<User> {
  const user = users.find((u) => u.id === id);
  if (!user) return err(`User ${id} not found`);
  return ok(user);
}
