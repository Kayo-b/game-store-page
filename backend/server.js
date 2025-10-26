const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/steam-api/:appid', async (req, res) => {
  try {
    const { appid } = req.params;
    const steamURL = `https://store.steampowered.com/api/appdetails?appids=${appid}`;
    
    const response = await fetch(steamURL);
    const data = await response.json();
    
    res.json(data);
  } catch (error) {
    console.error('Error fetching from Steam API:', error);
    res.status(500).json({ error: 'Failed to fetch from Steam API' });
  }
});

app.get('/proxy/*', async (req, res) => {
  try {
    const targetURL = req.url.replace('/proxy/', '');
    
    const response = await fetch(targetURL);
    const data = await response.json();
    
    res.json(data);
  } catch (error) {
    console.error('Error in proxy:', error);
    res.status(500).json({ error: 'Proxy request failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
