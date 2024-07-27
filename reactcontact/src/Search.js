import React, { useState } from 'react'
import axios from 'axios';

const Search = ({ onSearchResults }) => {
    const [query, setQuery] = useState('');
    const search = async (e) => {
        e.preventDefault();
        const response = await axios.get(`http://localhost:8080/api/contacts/search?query=${query}`);
        onSearchResults(response.data);
      };
  return (
    <div>
  <form onSubmit={search}>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
    </div>
  )
}

export default Search