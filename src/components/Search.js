// import things
import React, { Component } from 'react';
import axios from 'axios';

// Import necessary components
import Suggestions from './Suggestions';
import Results from './Results';

// Instantiate the Search class
class Search extends Component {
  constructor() {
    super();
    this.state = {
      breedList: [],
      breed: '',
      suggestions: [],
      zipcode: '',
      puppiesLoaded: false,
      puppyData: null

    };
    // bind the functions
    this.handleChange = this.handleChange.bind(this);
    this.handleBreedChange = this.handleBreedChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.newSearch = this.newSearch.bind(this);
  }
  // render each breed option with a photo. placeholder right now.
  componentDidMount() {
    axios({
      method: "GET",
      url: '/api/puppyfinder/breeds'
    })
    .then(data => {
      this.setState({
        breedList: data.data.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  renderSearch() {
    return (
      <div className="searchform">
        <h1>Wanna Find Some Puppies?</h1>
        {/* Form that submits the search parameters to the axios call in this.handleSubmit */}
        <form onSubmit={this.handleSubmit}>
          <label>Select a breed and enter your zipcode!</label>
          <br />
          <br />
          <input type="submit" value="Search for Puppers" />
          <br />
          <br />
          <input
            placeholder="Search breeds"
            value={this.state.breed}
            name="breed"
            onChange={this.handleBreedChange}
          />
          <input
            type="text"
            name="zipcode"
            placeholder="Zip Code"
            value={this.state.zipcode}
            onChange={this.handleChange}
            required
          />

          {
            this.state.suggestions ?
              <Suggestions
                results={this.state.suggestions}
              /> : ''
          }

          <br />
          <br />
        </form>

      {/* Name and photo of each of the breeds you can search for */}
        <div className="wrapper">
          <div className="breeds">
            <img src="https://i.imgur.com/KQpe37F.jpg" alt="Poodle" />
            <p>Poodle</p>
          </div>
          <div className="breeds">
            <img src="https://i.imgur.com/d37Hhlm.jpg" alt="Beagle" />
            <p>Beagle</p>
          </div>
          <div className="breeds">
            <img src="https://i.imgur.com/8P3e8k2.jpg" alt="Dalmatian" />
            <p>Dalmatian</p>
          </div>
          <div className="breeds">
            <img src="https://i.imgur.com/xINvtOj.jpg" alt="Miniature Schnauzer" />
            <p>Miniature Schnauzer</p>
          </div>
          <div className="breeds">
            <img src="https://i.imgur.com/BrXIenJ.jpg" alt="Husky" />
            <p>Husky</p>
          </div>
          <div className="breeds">
            <img src="https://i.imgur.com/M0joMkY.jpg" alt="Labrador Retriever" />
            <p>Labrador Retriever</p>
          </div>
          <div className="breeds">
            <img src="https://i.imgur.com/SNpLFSV.jpg" alt="Great Dane" />
            <p>Great Dane</p>
          </div>
          <div className="breeds">
            <img src="https://i.imgur.com/SPQQya4.jpg" alt="German Shepherd" />
            <p>German Shepherd</p>
          </div>
          <div className="breeds">
            <img src="https://i.imgur.com/zrCFXpK.jpg" alt="Chihuahua" />
            <p>Chihuahua</p>
          </div>
          <div className="breeds">
            <img src="https://i.imgur.com/AZzKaHV.jpg" alt="Golden Retriever" />
            <p>Golden Retriever</p>
          </div>
          <div className="breeds">
            <img src="https://i.imgur.com/VuRQ9LH.jpg" alt="Corgi" />
            <p>Corgi</p>
          </div>
          <div className="breeds">
            <img src="https://i.imgur.com/dGRsUSx.jpg" alt="Shiba Inu" />
            <p>Shiba Inu</p>
          </div>
        </div>

      </div>
    )
  }

  getBreeds() {
    const breedList = this.state.breedList;
    const query = this.state.breed.toLowerCase();
    let count = 0;
    let suggestions = [];

    // Loops through the list of breeds, looking for breeds that match what's entered in the search function
    breedList.forEach(breed => {
      const name = breed.$t.toLowerCase();
       if (name.match(query) && count < 10) {
         count = count + 1;
         suggestions.push(breed.$t);
       }
       else {
         return
       }
    })
    this.setState({
      suggestions: suggestions
    })
  }

  handleBreedChange(event) {
    const breed = event.target.value;
    this.setState({
      suggestions: [],
      breed: breed
    })
    if (breed && breed.length > 0) {
      this.getBreeds();
    }
    else if (!this.state.breed) {
    }
  }
  // Changes state based on what the user inputs into the form
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }
  // changes the redirect state so the component knows to redirect to the results page
  handleSubmit(event) {
    event.preventDefault();
    // Check first to make sure the breed is in the list
    const breeds = this.state.breedList;
    let query = this.state.breed.toLowerCase();
    let found;
    breeds.forEach(breed => {
      if (breed.$t.toLowerCase() === query) {
        console.log("Found " + breed.$t);
        found = true;
        query = breed.$t;
        return
      }
    })
    if (found === true) {
      // Post to the puppyfinder controller, which will make a get request to the puppy finder API
      // Sends the breed and zipcode to the controller
      axios({
        method: 'POST',
        url: '/api/puppyfinder',
        data: {
          breed: query,
          zipcode: this.state.zipcode,
        },
      })
      .then(puppyData => {
        console.log(puppyData);
        if (puppyData.data.data.pet.length) {
          this.setState({
            puppiesLoaded: true,
            puppyData: puppyData.data.data.pet,
          });
        }
        else {
          alert(`Sorry, but we couldn't find any ${this.state.breed} dogs nearby ${this.state.zipcode}. Maybe try something else?`)
        }
      })
      .catch(err => {
        console.log('puppyfinder call error', err);
      })
    }
    else {
      alert("Sorry, we couldn't find that breed.");
    }

  }
  // Changes state back to what it is when the page loads,
  newSearch() {
    this.setState({
      puppiesLoaded: false,
      puppyData: null,
    });
  }
  render() {
    return (
      <div className="search">
        {/* Conditional rendering. If we loaded data from the puppy finder API the Results component will render.
            We're passing down the data we got from the back-end as props for results to render.
            If there's no data from the API the search form will render.
            The button has an onCLick event to have a new search by resetting state */}
        {this.state.puppiesLoaded ?
        <div className="Results">
        <p onClick={this.newSearch} className="newsearch">New Search</p>
        <Results puppies={this.state.puppyData} />
        </div> :
        this.renderSearch() }

      </div>
      )
  }
}

export default Search;
