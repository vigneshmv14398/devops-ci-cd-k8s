const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('DevOps CI/CD App Running-ver 3');
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
