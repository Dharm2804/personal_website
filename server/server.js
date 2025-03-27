const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, '../project/dist')));

// Serve static files from the project directory
app.use('/project', express.static(path.join(__dirname, '../project')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));