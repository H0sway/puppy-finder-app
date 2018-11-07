// Import react
import React from 'react'

// Functional component that renders search suggestions from the breeds listed in the Petfinder API
const Suggestions = (props) => {
  // Loops through the results props
  const options = props.results.map(breed => (
    <li key={props.results.indexOf(breed)}>
      {breed}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions
