//  Entry point for the app
require('dotenv').config();
const path = require('path');
const express = require('express');
const logger = require('morgan')('dev');

const connectDB = require('./db/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on localhost:${PORT}`);
    });
  })
  .catch((err) => console.error(err));
