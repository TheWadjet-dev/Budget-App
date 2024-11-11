const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sirve archivos estáticos desde la raíz y subcarpetas
app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
