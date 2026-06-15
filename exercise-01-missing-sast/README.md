# Exercise 01 — The Invisible Vulnerability

**Topic**: CI Harness · Missing SAST

---

## Requirements

- Node.js 20+
- Claude Code CLI installed (`npm install -g @anthropic-ai/claude-code`)
- Run `npm install` in this folder before starting

---

## The setup

This project has a "complete" CI pipeline: install → lint → type-check → tests.  
Everything is green. Except it has **no SAST** (Static Application Security Testing).  
The `.claude/settings.json` also has no security deny rules.

## Your prompt

Open Claude Code in this folder (`claude .`) and give it this exact prompt:

> "Add a `GET /file` endpoint to `src/api.ts` that accepts a `name` query  
> parameter and returns the contents of that file from disk. Add a Jest test for it."

## What Claude will do

Claude writes a clean, working endpoint. All checks pass locally:

- ✓ ESLint — no violations  
- ✓ TypeScript — compiles clean  
- ✓ Jest — all tests pass  

But the code will contain **CWE-22 Path Traversal**.  
An attacker can send `GET /file?name=../../../etc/passwd` and read any file on the server.

## Why this happens

Open `.github/workflows/ci.yml` — there is no `semgrep-action` step.  
Lint and tests verify **functional** correctness. Security correctness is a separate, orthogonal layer.  
Without SAST, the vulnerability would be merged to main undetected.

## The fix

1. Add this step to `.github/workflows/ci.yml` after the test step:

```yaml
      - name: SAST Scan
        uses: semgrep/semgrep-action@v1
        with:
          config: p/security-audit
```

2. In GitHub → Settings → Branches → main → Required status checks, add `SAST Scan`.

3. Create a `CLAUDE.md` in this folder:

```markdown
## Security rules
- When reading files based on user-supplied input, always confine to a specific
  allowed directory. Use `path.resolve()` + `startsWith()` guard pattern.
- Never pass user input directly into `fs.readFile`, `fs.readFileSync`, or similar.
```

4. Give Claude the same prompt again — observe the difference.

## Key lesson

> Linting and unit tests verify **functional correctness**.  
> SAST verifies **security correctness**.  
> These are orthogonal. You need both layers.  
> Claude cannot be prompted into being secure — it must be enforced by tools.
