import React, {Component} from 'react';
import SingleResult from './SingleResult';

//bring in Component module from react library
//Promise based HTTP client for the browser and node.js
//this is how you make calls from node.js
//transforms request and response data
//transforms JSON

//bring in SingleResult component
//define a class based component
//all class based components must render and return
//Results will display the API data returned from Pet Finder API
//parameters for the query, search by breed and zipcode
//for example, all the Schnauzers in 11209 (brooklyn)
//instantiate Results
//it will inherit all the methods of Component
//call super()
//initialize state
//this component is a child of Search?
//renderPuppies will display all the puppies returned from the search
//iterate through the data returned using array method .map()
//each object within the data will return a Puppy component
//Puppy is a functional component
class Results extends Component {
  constructor (props) {
  super(props);
  this.state = {
    meetPuppy: false,
    puppyData: null,
    puppyList: true,
  }
  this.renderSingleResult = this.renderSingleResult.bind(this);
  this.backToSearch = this.backToSearch.bind(this);
  }
  renderSingleResult(puppy) {
    this.setState({
      meetPuppy: true,
      puppyData: puppy,
      puppyList: false,
    })
  }
  renderPuppies() {
  console.log(this.props.puppies);
   return this.props.puppies.map((puppy,index) => {
    return (
      <div key={puppy.name.$t} className="dogs">
        <h3>{puppy.name.$t}</h3>
        <button onClick={() => this.renderSingleResult(puppy)}>Meet {puppy.name.$t}</button>
        <br />
        <br />
        {puppy.media.photos ? <img src={puppy.media.photos.photo[2].$t} /> : <img src="https://i.imgur.com/T8c5BKr.png" />}
      </div>
    )
    })
  }
  backToSearch() {
    this.setState({
      meetPuppy: false,
      puppyData: null,
      puppyList: true,
    })
  }
    render() {
      console.log(this.state);
      return (
        <div className='results'>
          {this.state.puppyList ? <div className="wrapper">{this.renderPuppies()}</div> : ''}
          {this.state.meetPuppy ? <div><SingleResult puppy={this.state.puppyData} /><button className='back-results-button' onClick={this.backToSearch}>Back To Results</button></div> : ''}
        </div>
      )
    }
  }

export default Results;
//always export for access
