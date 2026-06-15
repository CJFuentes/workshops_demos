# Exercise 04 — The Convention Ignorer

**Topic**: CLAUDE.md · Vague rules don't guide Claude

---

## Requirements

- Node.js 20+
- Claude Code CLI installed (`npm install -g @anthropic-ai/claude-code`)
- Run `npm install` in this folder before starting

---

## The setup

This project has a `CLAUDE.md` — but it's too vague to be useful.  
The codebase follows strict conventions:

- **Result pattern** for all return values: `{ ok: true, data: T }` or `{ ok: false, error: string }`
- **Zod** for all input validation
- **File naming**: `<domain>.service.ts`, `<domain>.controller.ts`, `<domain>.test.ts`
- **Tests next to source**: `src/users/users.service.test.ts`

Open `CLAUDE.md` — it says almost nothing about any of this.

## Your task

Open Claude Code in this folder (`claude .`) and give it this exact prompt:

> "Add a `createOrder(userId, items)` function to the orders domain.  
> It should validate the input, create the order, and return the result.  
> Add a unit test."

## What Claude will do

Without explicit conventions, Claude will write code **in its own style**:

- Uses `try/catch` and throws errors instead of the Result pattern
- Uses `Joi` or manual validation instead of Zod
- Creates files with different names (`order.ts`, `orderService.ts`)
- Puts tests in a `__tests__/` folder instead of next to source
- Uses `async/await` patterns that don't match the existing code

The code will be perfectly functional — but it won't match the codebase.  
Over time, the project becomes inconsistent and hard to maintain.

## Why this happens

Open `CLAUDE.md`. It says "Write good TypeScript code." That's it.  
Claude has no idea about the Result pattern, Zod, or file conventions.  
It defaults to common patterns it has seen in training data.

## The fix

Replace `CLAUDE.md` with the detailed version in `solution/CLAUDE.md`.

Then reset Claude's changes and give the same prompt again.  
Observe how Claude now:
- Uses the Result pattern
- Uses Zod for validation
- Creates files in the right location with the right names
- Puts tests next to the source file

## Key lesson

> A vague `CLAUDE.md` is almost as bad as no `CLAUDE.md`.  
> The more specific your conventions, the more consistent Claude's output.  
> Show Claude examples from your existing code — don't just describe patterns.
