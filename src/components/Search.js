// import things
import React, { Component } from 'react';
import axios from 'axios';
import Results from './Results';

// Instantiate the Search class
class Search extends Component {
  constructor() {
    super();
    this.state = {
      breed: 'Poodle',
      zipcode: '',
      puppiesLoaded: false,
      puppyData: null

    };
    // bind the functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.newSearch = this.newSearch.bind(this);
  }
  // render each breed option with a photo. placeholder right now.
  renderSearch() {
    return (
      <div className="searchform">
      <h1>Wanna Find Some Puppies?</h1>
      {/* Form that submits the search parameters to the axios call in this.handleSubmit */}
        <form onSubmit={this.handleSubmit}>
          <label>Select a breed and enter your zipcode!</label>
          <br />
          <br />
          <select name="breed" value={this.state.breed} onChange={this.handleChange}>
            <option value="Poodle">Poodle</option>
            <option value="Beagle">Beagle</option>
            <option value="Dalmatian">Dalmatian</option>
            <option value="Miniature Schnauzer">Miniature Schnauzer</option>
            <option value="Husky">Husky</option>
            <option value="Labrador Retriever">Labrador Retriever</option>
            <option value="Great Dane">Great Dane</option>
            <option value="German Shepherd Dog">German Shepherd</option>
            <option value="Chihuahua">Chihuahua</option>
            <option value="Golden Retriever">Golden Retriever</option>
            <option value="Corgi">Corgi</option>
            <option value="Shiba Inu">Shiba Inu</option>
          </select>
          <input
            type="text"
            name="zipcode"
            placeholder="Zip Code"
            value={this.state.zipcode}
            onChange={this.handleChange}
            required
          />
          <br />
          <br />
          <input type="submit" value="Search for Puppers" />
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
    // Post to the puppyfinder controller, which will make a get request to the puppy finder API
    // Sends the breed and zipcode to the controller
    axios({
      method: 'POST',
      url: '/api/puppyfinder',
      data: {
        breed: this.state.breed,
        zipcode: this.state.zipcode,
      },
    })
    // Checks to see if puppy data was returned by putting it into an array
    .then(puppyData => {
      // console.log(puppyData.data.data.pet);
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
  // Changes state back to what it is when the page loads,
  newSearch() {
    this.setState({
      puppiesLoaded: false,
      puppyData: null,
    });
  }
  render() {
    console.log('inside render', this.state)
    // renders the page normally
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
