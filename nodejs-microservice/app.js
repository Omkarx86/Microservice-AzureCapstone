const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Simple GET endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js Microservice!');
});

// POST endpoint to process data
app.post('/process', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);

    res.json({ message: 'Data processed successfully', data: data });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
