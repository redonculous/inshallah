const express = require('express');
const app = express();
const path = require('path');


const PORT = 3000;

const DISCORD_ID = '879668154236821514'; 


app.use(express.static('public'));


app.get('/api/lanyard', async (req, res) => {
    try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
        const data = await response.json();
        

        res.json(data);
    } catch (error) {
        console.error("Lanyard Error:", error);
        res.status(500).json({ success: false, error: "Failed to fetch status" });
    }
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});