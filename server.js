const DISCORD_ID = "879668154236821514";

async function loadStatus() {
  try {
    const res = await fetch(
      `https://api.lanyard.rest/v1/users/${DISCORD_ID}`
    );

    const json = await res.json();
    const data = json.data;

    // Example: update elements on the page
    const usernameEl = document.getElementById("discord-username");
    const statusEl   = document.getElementById("discord-status");

    if (usernameEl) usernameEl.textContent = data.discord_user.username;
    if (statusEl)   statusEl.textContent   = data.discord_status;

    // You can also log it to see structure
    console.log("Lanyard data:", data);
  } catch (err) {
    console.error("Failed to load Lanyard status:", err);
  }
}

loadStatus();
