const express = require('express');
const path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/test', (req, res) => {
  res.send({ test: 'success' });
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(` Server is up !`);
});
