const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('dev')); // Logging middleware

let resources = {}; // This will act as an in-memory store

// Create resource
app.post('/resource', (req, res) => {
  const { id, data } = req.body;
  if (resources[id]) {
    return res.status(409).send('Resource already exists.');
  }
  resources[id] = data;
  res.status(201).send('Resource created.');
});

// Read resource
app.get('/resource/:id', (req, res) => {
  const { id } = req.params;
  if (!resources[id]) {
    return res.status(404).send('Resource not found.');
  }
  res.status(200).json(resources[id]);
});

// Delete resource
app.delete('/resource/:id', (req, res) => {
  const { id } = req.params;
  if (!resources[id]) {
    return res.status(404).send('Resource not found.');
  }
  delete resources[id];
  res.status(200).send('Resource deleted.');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`RESTful API server is running on http://localhost:${PORT}`);
});
