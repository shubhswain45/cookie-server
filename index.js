const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cookieParser());

// Update CORS configuration for production
const frontendURL = 'https://cookie-client.vercel.app'; // Replace with your frontend domain
app.use(cors({
    origin: frontendURL,
    credentials: true, // Allow cookies to be sent
}));

// Route to set a cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('dummyCookie', 'cookieValue123', {
        httpOnly: true,
        secure: true, // Ensures the cookie is sent only over HTTPS
        sameSite: 'none', // Allows cross-origin cookies
        path: '/',
    });
    res.send({ message: 'Cookie has been set!' });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});
