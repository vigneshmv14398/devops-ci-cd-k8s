const express = require('express');
const app = express();

const APP_NAME = process.env.APP_NAME || 'DevOps App';
const ENVIRONMENT = process.env.ENVIRONMENT || 'dev';

app.get('/', (req, res) => {
  res.send(`${APP_NAME} running in ${ENVIRONMENT}`);
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});
