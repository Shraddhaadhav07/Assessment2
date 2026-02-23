const express = require('express'); // Make sure Express is installed
const app = express();
const PORT = 3000;

// Logger middleware
function logger(req, res, next) {
  console.log(`${req.method} ${req.url} - Request received`);
  next(); // Pass control to the next middleware
}

// Use the middleware for all routes
app.use(logger);

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});