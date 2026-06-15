# Exercise 05 — The Rogue Slash Command

**Topic**: Skills & Custom Commands · Vague commands cause unintended changes

---

## Requirements

- Node.js 20+
- Claude Code CLI installed (`npm install -g @anthropic-ai/claude-code`)
- Run `npm install` in this folder before starting
- Git recommended so you can revert changes after the exercise:
  ```bash
  git init && git add -A && git commit -m "Initial commit"
  ```

---

## The setup

This project has a custom Claude Code command: `/cleanup`.  
Open `.claude/commands/cleanup.md` — it reads:

> "Clean up the codebase."

That's it. Three words. No scope. No constraints. No output format.

## Your task

Open Claude Code in this folder (`claude .`) and run:

```
/cleanup
```

## What Claude will do

Claude will interpret "clean up the codebase" as broadly as possible:

- Delete commented-out code blocks (some are intentionally preserved as documentation)
- Remove `TODO` and `FIXME` comments (they are tracked in the backlog)
- "Simplify" functions by inlining logic and removing what it sees as redundancy
- Reformat files, possibly breaking project style rules
- Rename variables to what it considers "cleaner" names
- Potentially touch files in `src/legacy/` which is explicitly frozen

The changes will look reasonable. That is what makes this dangerous.  
Claude is not wrong — it is doing exactly what the command says.

## Why this happens

A slash command is just a prompt template. A vague template produces  
unpredictable output, especially at scale. The command gives Claude  
authority to "clean up" with no definition of what clean means,  
no scope restrictions, and no confirmation step.

## The fix

Replace `.claude/commands/cleanup.md` with the improved version in  
`solution/commands/cleanup.md`.

Reset Claude's changes (`git checkout .` if you initialised git) and  
run `/cleanup` again. Observe how the scoped command:

- Only touches `src/` (not `src/legacy/`)
- Only removes unused imports — nothing else
- Lists proposed changes and asks for confirmation before applying
- Leaves comments, TODOs, and logic completely untouched

## Key lesson

> A slash command is a reusable prompt. Treat it like a function signature:  
> define the inputs, the scope, the constraints, and the expected output.  
> "Do X" is not a command — it is an invitation for Claude to improvise.
