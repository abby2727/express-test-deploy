const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
	res.json({ message: 'Hello from server!' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
