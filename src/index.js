const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes 
app.use('/api/members', require('./routes/members.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), ()=>{
  console.log(`[Server Init] Server on port ${app.get('port')}`);
})