# Repository Guidelines

## Project Structure & Module Organization

This repository is intended to host multiple skill modules. Each skill lives in its own top-level folder and includes a definition plus any supporting scripts.

- `<skill-name>/SKILL.md`: Skill metadata and usage instructions.
- `<skill-name>/scripts/`: Optional helper scripts used by the skill.
- `.claude/`: Local agent config (not part of the skill runtime).

When working in this repository, agents should only add or update skills inside this repo. Do not modify global skill directories (e.g., `$CODEX_HOME/skills` or `~/.codex/skills`) from here.

When adding new skills, create a top-level folder per skill (kebab-case) with `SKILL.md` and any supporting `scripts/`, `assets/`, or `references/` subfolders.

## Build, Test, and Development Commands

There is no repo-wide build step. Commands are skill-specific.

- Example: `bun <skill-name>/scripts/<script>.js "Your message"` for a skill helper script.

## Coding Style & Naming Conventions

- JavaScript uses 2-space indentation and double quotes.
- Prefer small, single-purpose scripts with clear argument validation.
- Directory and file names use kebab-case (e.g., `bark-notifier`, `encode-msg.js`).

## Testing Guidelines

No automated tests are currently defined. Validate manually:

- Run a skill script with expected arguments.
- Verify scripts exit non-zero on missing args or env vars.

If adding tests later, keep them near the skill (e.g., `bark-notifier/tests/`) and name files `*.test.js`.

## Commit & Pull Request Guidelines

Commit history uses short, action-oriented summaries, commonly prefixed with `feat:` (e.g., `feat: evolve bark-notifier`). Follow that style unless a change is purely documentation or maintenance.

For pull requests:
- Include a brief description of the change and the motivation.
- Note any new environment variables or external dependencies.
- For script changes, include a quick manual test note (command + outcome).

## Security & Configuration Tips

Never hardcode secrets. Keep tokens and endpoints in your shell environment or secret manager, and avoid logging sensitive values.
