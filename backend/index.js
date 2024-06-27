
const express = require('express');
const cors= require('cors');

const bodyParser = require('body-parser');
const connectDb = require("./db");

connectDb();


// Import controllers
const generalInformationController = require('./controllers/generalInformation');
const contactInformationController = require('./controllers/contactDetails');

// Create a new Express app
const app = express();


// Set the port for the server to listen on
const port = 3000;

// Use Body Parser to parse JSON bodies
app.use(bodyParser.json());
app.use(cors())

// Define routes for the controllers
app.use('/', generalInformationController);
app.use('/', contactInformationController);


// Define a route for the root URL ('/') that returns a simple message
app.get('/', (req, res) => {
  res.send('Welcome to our API!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});