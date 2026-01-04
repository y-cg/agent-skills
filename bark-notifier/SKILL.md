---
name: bark-notifier
description: Send a Bark push notification when the agent is stuck, blocked, or needs user input. Use when a user asks to be notified on being stuck, wants Bark alerts, or mentions $BARK_ENDPOINT/$BARK_KEY notifications.
---

# Bark Stuck Notifier

## When to Notify

Send a notification when blocked and cannot proceed without user intervention:

- Repeated tool failures (3+ consecutive failures with different approaches)
- Missing required credentials, API keys, or authentication tokens
- File/directory permissions preventing access
- Ambiguous user request requiring clarification before proceeding
- External API/service outage blocking work
- Git conflict or repository state requiring manual resolution

**Do not notify** for:
- Routine errors that can be retried with different approaches
- Missing documentation that can be found by searching
- Normal workflow steps (e.g., "which branch should I use?")

## Steps

1) Compose a concise, actionable message that identifies:
   - What is blocking progress
   - What specific action or input is needed from the user

2) Execute the bundled script to send the notification:

```bash
bun ./scripts/encode-msg.js "Your concise message here"
```

Example:
```bash
bun ./scripts/encode-msg.js "Blocked: Missing API key for OpenAI. Please provide the API key to continue."
```

## Notes

- **Keep messages brief** - Mobile push notifications work best when under 100 characters
- **Never include secrets** in messages (API keys, passwords, tokens)
- **One notification per blocker** - Don't resend unless the user explicitly requests reminders
- **Prerequisites**: `BARK_ENDPOINT` and `BARK_KEY` environment variables must be set
