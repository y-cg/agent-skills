---
name: bark-notifier
description: Send a Bark push notification when the agent is stuck, blocked, or needs user input. Use when a user asks to be notified on being stuck, wants Bark alerts, or mentions $BARK_ENDPOINT/$BARK_KEY notifications.
---

# Bark Stuck Notifier

## Trigger

Notify when you are stuck after reasonable attempts (e.g., repeated tool failures, missing required inputs, blocked by permissions) or when you must ask the user for critical information to proceed.

## Steps

1) Decide the short message you need the user to see. Include: the blocker, the immediate next action needed, and any missing input.
2) URL-encode the message so it is safe in a path segment.
3) Send the notification using Bark:

```bash
# Example message
bun ./scripts/encode-msg.js "Need API key to continue"
```

## Notes

- Keep messages brief and actionable; avoid secrets or full logs.
- Use Bun/Node-compatible JS to send the request; pass the message via argv (avoid env vars); use `BARK_ENDPOINT` and `BARK_KEY` for the endpoint and key; prefer the bundled `scripts/encode-msg.js`.
- Only notify once per blocker unless the user explicitly asks for reminders.
