# Cleanup — Remove unused imports

## Scope
Only process files matching `src/**/*.ts`.  
**Exclude** `src/legacy/**` — that directory is frozen.

## What to do
1. Scan each in-scope file for import statements.
2. Identify imports that are never referenced in the file body.
3. Build a list of proposed removals in this format:
   ```
   src/user.service.ts  — remove: EventEmitter (line 4)
   src/order.service.ts — remove: path (line 2)
   ```
4. Present the full list to me and ask for confirmation before making any changes.
5. Only after I confirm: remove the unused imports. Do not change anything else.

## Hard constraints
- Do not modify, remove, or reformat any code other than unused import lines.
- Do not touch comments, TODOs, FIXMEs, or logic.
- Do not rename variables or reformat functions.
- If you are unsure whether an import is used, keep it.
