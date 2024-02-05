import React, { useState } from 'react';
import './index.scss'

const SearchBar = ({ fetchDataAsync, onSearch }) => {

    const [localSearchTerm, setLocalSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(localSearchTerm);
    };

    return (
        <div className="searchBar">
            <input type="text" name="searchBar" id="searchBar" onChange={(e) => setLocalSearchTerm(e.target.value)} placeholder='What book are you looking for ?' />
            <div id="searchBtn" onClick={handleSearch}><p>Search</p></div>
        </div>
    );
};

export default SearchBar;
