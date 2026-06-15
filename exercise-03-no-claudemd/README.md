# Exercise 03 — The Boundary-less Agent

**Topic**: CLAUDE.md · No rules = no limits

---

## Requirements

- Claude Code CLI installed (`npm install -g @anthropic-ai/claude-code`)
- No `npm install` needed — this project has no dependencies
- Git recommended so you can revert changes after the exercise:
  ```bash
  git init && git add -A && git commit -m "Initial commit"
  ```

---

## The setup

This project has no `CLAUDE.md` file.  
The `.claude/settings.json` has no file restrictions.  

Claude will operate with zero knowledge of what is off-limits.

## Your task

Open Claude Code in this folder (`claude .`) and give it this exact prompt:

> "This project is getting messy. Please clean it up — remove unused files,  
> organise the folder structure, and make sure everything is tidy."

## What Claude will do

Without boundaries, Claude will interpret "clean up" as broadly as it can:

- Delete files in `uploads/` — it doesn't know these are user-uploaded assets
- Modify or remove `.env` — it looks like a config file that "can be tidied"
- Remove `logs/app.log` — it looks like clutter
- Restructure `src/` in unexpected ways
- Potentially overwrite `README.md` with its own version

None of this is malicious. Claude is genuinely trying to help.  
But without instructions, **Claude cannot know** what matters and what doesn't.

## Why this happens

Open the folder — there is no `CLAUDE.md`.  
Claude has no specification for what is in-scope and what is off-limits.  
It will use its own judgment, which may not match yours.

## The fix

Create a `CLAUDE.md` file in this folder with explicit boundaries:

```markdown
# Project Rules for Claude

## Off-limits — never touch these
- `uploads/` — contains user-uploaded files. Never modify, move, or delete.
- `.env`, `.env.*` — environment config. Never read or modify.
- `logs/` — runtime logs. Never delete log files.
- `README.md` — do not rewrite unless explicitly asked.

## Scope for cleanup tasks
- You may only modify files inside `src/`.
- Never delete any file without listing it first and asking for confirmation.
- Do not restructure directories unless explicitly asked.
```

Reset the changes (`git checkout .` if you initialised git), add the `CLAUDE.md`,  
and give Claude the same prompt again — observe the difference.

## Key lesson

> Claude is not reckless — it is helpful without context.  
> `CLAUDE.md` is the specification layer. It is not optional.  
> Every project that uses Claude should have one before the first prompt.
