// Import react
import React from 'react'

// Functional component that renders search suggestions from the breeds listed in the Petfinder API
const Suggestions = (props) => {
  // Loops through the results props
  const options = props.results.map(breed => (
    <div key={props.results.indexOf(breed)}>
      <p>{breed}</p>
    </div>
  ))
  return <div className="suggestions">{options}</div>
}

export default Suggestions
