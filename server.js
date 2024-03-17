const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
	res.send('Your express server is running');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
