# Project Guide

## Commands
- `/cleanup` — remove unused imports from TypeScript source files

## Structure
- `src/` — application source (active development)
- `src/legacy/` — frozen legacy code, do not modify
- `tests/` — test files

## Rules
- Never modify files in `src/legacy/`
- Always run tests after making changes
