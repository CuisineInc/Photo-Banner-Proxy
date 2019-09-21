require('newrelic');
const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3000;

app.use(express.static(path.join(__dirname,  '../public')));

app.use('/:restaurant/', express.static(path.join(__dirname,  '../public')));

app.use(bodyParser.json());

app.use(cors())

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

app.listen(PORT, function() {
  console.log(`App is listening on port ${PORT}!`);
});
