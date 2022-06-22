const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const PORT = process.env.port || 5000;
const { TOKEN } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('*', (req, res) => {
  const { method } = req;
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc${req.originalUrl}`;
  const headers = { Authorization: TOKEN };
  const data = req.body;

  axios({
    method, url, headers, data,
  })
    .then((result) => { res.send(result.data); })
    .catch((err) => res.send(err));
});

app.listen(PORT, () => {
  console.log(`Client server listening on port ${PORT}.`);
});
