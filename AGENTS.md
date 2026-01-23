# Repository Guidelines

## Project Structure & Module Organization

This repository is intended to host multiple skill modules. Each skill lives in its own top-level folder and includes a definition plus any supporting scripts.

- `<skill-name>/SKILL.md`: Skill metadata and usage instructions.
- `<skill-name>/scripts/`: Optional helper scripts used by the skill.

When working in this repository, agents should only add or update skills inside this repo. Do not modify global skill directories from here.

To help agents discover skills in this repository, each skills should be symlinked to the repository scoop directory:

```bash
# if you are codex
gln -s <skill-name> .codex/skills/<skill-name>
# if you are claude
gln -s <skill-name> .claude/skills/<skill-name>
# if you are opencode
gln -s <skill-name> .opencode/skills/<skill-name>
```

## Security & Configuration Tips

Never hardcode secrets. Keep tokens and endpoints in your shell environment or secret manager, and avoid logging sensitive values.
