const express = require('express');
const app = express();
const path = require('path');

// Configuration
const PORT = 3000;
// Replace this with your actual Discord ID
const DISCORD_ID = '879668154236821514'; 

// Serve static files (HTML, CSS, Images) from the 'public' folder
app.use(express.static('public'));

// API Route: The frontend calls this, and THIS calls Lanyard
app.get('/api/lanyard', async (req, res) => {
    try {
        // We use the native Node.js fetch (available in Node 18+)
        const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
        const data = await response.json();
        
        // Send the Lanyard data back to your frontend
        res.json(data);
    } catch (error) {
        console.error("Lanyard Error:", error);
        res.status(500).json({ success: false, error: "Failed to fetch status" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});