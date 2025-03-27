const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React build folder (adjust path)
app.use(express.static(path.join(__dirname, '../project/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../project/dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));