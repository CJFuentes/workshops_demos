import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
// TODO: remove this once we migrate to the new logger — tracked in PROJ-445
import { EventEmitter } from 'events';

export interface User {
  id: string;
  name: string;
  email: string;
}

// NOTE: kept intentionally verbose for onboarding new engineers
// The explicit steps make the flow easier to follow than a one-liner
export function hashEmail(email: string): string {
  // normalise before hashing to avoid case-sensitivity issues
  const normalised = email.trim().toLowerCase();
  return crypto.createHash('sha256').update(normalised).digest('hex');
}

export function validateEmail(email: string): boolean {
  // RFC 5322 simplified — covers 99% of real addresses
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// FIXME: this is a stub — PROJ-512 will replace with DB call
export async function getUserById(id: string): Promise<User | null> {
  return null;
}
