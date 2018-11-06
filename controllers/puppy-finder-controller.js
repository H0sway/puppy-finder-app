// Create the puppy finder controller object
const axios = require('axios');
const puppyFinderController = {};

// Make the axios call to puppy finder API
puppyFinderController.search = (req,res) => {
  axios({
    method: 'GET',
    url: (`https://api.petfinder.com/pet.find?key=${process.env.API_KEY}&breed=${req.body.breed}&location=${req.body.zipcode}&count=12&format=json`),
  })
  .then(allTheDogs => {
    res.json({
      message: 'successfully made API call',
      data: allTheDogs.data.petfinder.pets
    })
  })
  .catch(err => {
    console.log('inside puppy finder API call error', err);
  });
};

puppyFinderController.breeds = (req,res) => {
  axios({
    method: "GET",
    url: `https://api.petfinder.com/breed.list?key=${process.env.API_KEY}&animal=dog&format=json`
  })
  .then(breeds => {
    res.json({
      message: "Dog Breeds",
      data: breeds.data.petfinder.breeds.breed
    })
  })
  .catch(err => {
    console.log(err);
  })
};

module.exports = puppyFinderController;
