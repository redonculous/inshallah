const DISCORD_ID = "879668154236821514";

async function loadStatus() {
  try {
    const res = await fetch(
      `https://api.lanyard.rest/v1/users/${DISCORD_ID}`
    );

    const json = await res.json();
    const data = json.data;

    if (!data || !data.discord_user) {
      console.error("No data from Lanyard:", json);
      return;
    }

    const usernameEl = document.getElementById("discord-username");
    const statusEl   = document.getElementById("discord-status");

    if (usernameEl) usernameEl.textContent = data.discord_user.username;
    if (statusEl)   statusEl.textContent   = data.discord_status;

    console.log("Lanyard data:", data);
  } catch (err) {
    console.error("Failed to load Lanyard status:", err);
  }
}

loadStatus();
