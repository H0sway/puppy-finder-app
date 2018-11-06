// Import express
const express = require('express');
// Define the router
const puppyFinderRouter = express.Router();

// Import opinionController
const puppyFinderController = require('../controllers/puppy-finder-controller');

// Send the API data to localhost
puppyFinderRouter.post('/', puppyFinderController.search);
puppyFinderRouter.get('/breeds', puppyFinderController.breeds);

module.exports = puppyFinderRouter;
