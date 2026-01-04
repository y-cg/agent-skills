async function sendNotification() {
  const msg = process.argv.slice(2).join(" ");
  if (!msg) {
    console.error("Usage: encode-msg.js <message>");
    process.exit(1);
  }

  const endpoint = process.env.BARK_ENDPOINT;
  const key = process.env.BARK_KEY;
  if (!endpoint || !key) {
    console.error("Missing BARK_ENDPOINT or BARK_KEY environment variables");
    process.exit(1);
  }

  const encMsg = encodeURIComponent(msg);
  const url = `${endpoint}/${key}/${encMsg}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Bark request failed: ${res.status} ${res.statusText}`);
      process.exit(1);
    }
    console.log(`Notification sent: "${msg}"`);
  } catch (error) {
    console.error(`Failed to send notification: ${error.message}`);
    process.exit(1);
  }
}

sendNotification();
