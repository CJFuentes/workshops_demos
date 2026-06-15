# Project Guide for Claude

## Architecture

This is a TypeScript application. All code lives in `src/`.  
Each domain has its own folder: `src/users/`, `src/orders/`, etc.

## Mandatory patterns — always follow these

### 1. Result type (never throw)
All service functions MUST return `Result<T>` from `src/types.ts`.  
Never use `throw`, never return `null` or `undefined` for errors.

```typescript
// ✅ Correct
export function createOrder(input: unknown): Result<Order> {
  const parsed = CreateOrderSchema.safeParse(input);
  if (!parsed.success) return err(parsed.error.errors[0].message);
  // ...
  return ok(order);
}

// ❌ Wrong — never do this
export function createOrder(input: unknown): Order {
  if (!input) throw new Error('Invalid input');
  // ...
}
```

### 2. Zod for all validation
Use `zod` for every schema. Never use Joi, Yup, or manual `if` checks.

```typescript
import { z } from 'zod';
const Schema = z.object({ ... });
const parsed = Schema.safeParse(input);
```

### 3. File naming and location
| File type | Pattern | Example |
|-----------|---------|---------|
| Service | `<domain>.service.ts` | `orders.service.ts` |
| Controller | `<domain>.controller.ts` | `orders.controller.ts` |
| Types | `<domain>.types.ts` | `orders.types.ts` |
| Tests | `<domain>.service.test.ts` | `orders.service.test.ts` |

Tests live **next to** the source file, not in a `__tests__` folder.

### 4. No default exports
Always use named exports.

## Adding a new domain

1. Create `src/<domain>/` folder  
2. Create `<domain>.service.ts` with Zod schema + Result-returning functions  
3. Create `<domain>.service.test.ts` in the same folder  
4. Follow the `users` domain as the reference implementation
