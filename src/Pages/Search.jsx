import React from 'react'
import Card from '../Components/Card';

const Search = (props) => {
  let cards = props.searchResults.map((product, i) => {
    return <Card key={i} product={product} />;
  });
  return (
    <div className="Search">

      <h3>Search</h3>
      <div className="search-collection">
        {cards}
      </div>

    </div>
  )
}

export default Search
