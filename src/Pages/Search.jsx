import React from 'react'
import Card from '../Components/Card';

const Search = (props) => {
  let cards = props.searchResults.map((product, i) => {
    return <Card key={i} product={product} />;
  });
  return (
    <div className="Search">
      <h2>Search</h2>
      {cards}
    </div>
  )
}

export default Search
