require('dotenv').config({ silent: true });
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');

const dbRouter = require('./routes/db.js');

const app = express();
const port = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(logger('dev'));

app.listen(port, () => console.log('Server is listening on port', port));



app.use('/db/gardens', dbRouter);

