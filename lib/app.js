const express = require('express');
const path = require('path');
const app = express();

// Built in middleware
app.use(express.json());

// Path to public directory
app.use(express.static(path.join(__dirname, 'public')));

// App routes
app.use('/associates', require('./controllers/associates'));
app.use('/candidates', require('./controllers/candidates'));
app.use('/pets', require('./controllers/pets'));
app.use('/newbies', require('./controllers/newbies'));
app.use('/pests', require('./controllers/pests'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
