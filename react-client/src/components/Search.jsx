import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <input type="text" placeholder="Your todo"/>
        <button>Add!</button>
      </div>
    )
  }
}

export default Search;