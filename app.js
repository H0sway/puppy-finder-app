// Import dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

// Middleware stuffs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('build'));

//API route
app.use('/api/puppy', require('./routes/puppy-routes'));
app.use('/api/opinions', require('./routes/opinion-routes'));
app.use('/api/puppyfinder', require('./routes/puppy-finder-routes'));
app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

// Setting up the port
app.listen(PORT, () => {
  console.log(`Live on port ${PORT} but also it's the Shrek movie`);
});
