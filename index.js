const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cookieParser());
app.use(cors({ origin: 'https://cookie-client.vercel.app', credentials: true }));

// Route to set a cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('dummyCookie', 'cookieValue123', { httpOnly: true, path: '/' });
    res.send({ message: 'Cookie has been set!' });
});         

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});
