import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <input
            className='searchBar'
            type="text"
            placeholder="Search for games"
            onChange={(e) => onSearch(e.target.value)}
        />
        
    );
};

export default SearchBar;