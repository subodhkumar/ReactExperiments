const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use('/auth', authRoutes);
app.get('/', (req, res) => {
  res.send({ data: 'Home Page' });
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From RExpress' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
