# CI Hooks, Harness & Guardrails — Workshop Exercises

Five hands-on exercises demonstrating what happens when CI and Claude Code guardrails are missing or misconfigured.

Each folder is self-contained. Open it in Claude Code, give it the exact prompt from the README, and observe the failure. Then apply the fix.

---

## Exercises

| # | Folder | Layer | What breaks |
|---|--------|-------|-------------|
| 01 | `exercise-01-missing-sast/` | CI Harness | No SAST — CWE-22 path traversal ships through lint + tests undetected |
| 02 | `exercise-02-noVerify-bypass/` | CI Harness | `--no-verify` not blocked — Claude bypasses Gitleaks, API key lands in git history |
| 03 | `exercise-03-no-claudemd/` | CLAUDE.md | No file — Claude deletes user uploads and modifies `.env` |
| 04 | `exercise-04-vague-claudemd/` | CLAUDE.md | Vague rules — Claude ignores Result pattern, Zod, and file naming conventions |
| 05 | `exercise-05-broken-skill/` | Slash command | Overly broad `/cleanup` — sweeping unintended changes across the codebase |

---

## Setup

Each exercise is independent:

```bash
cd exercise-0N-<name>
npm install
claude .
```

Then give Claude the exact prompt from that exercise's `README.md`.

> **Exercise 02 only** — requires `git init` inside the folder before running. See its README.

---

## CI pipelines

GitHub Actions workflows are wired for exercises 01, 04, and 05.  
They trigger automatically when changes are pushed under the relevant exercise folder.

- **Exercise 01** pipeline is intentionally missing the SAST step — that is the point.
- **Exercise 04** and **05** pipelines run lint + type-check + tests.
