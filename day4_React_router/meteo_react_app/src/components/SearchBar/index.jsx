import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './index.scss'
import searchIcone from './img/search.svg';

const SearchBar = ({fetchDataOneDay, onSearch}) => {
    const [localSearchTerm, setLocalSearchTerm] = useState('');
    const navigate = useNavigate(); 

    const handleSearch = () => {
        const formatLocalSearchTerm = localSearchTerm.charAt(0).toUpperCase() + localSearchTerm.slice(1)
        console.log(formatLocalSearchTerm)
        onSearch(localSearchTerm);
        navigate(`/City/${formatLocalSearchTerm}`);
    };

    return (
        <div className="searchBar">
            <input type="text" name="searchBar" id="searchBar" onChange={(e) => setLocalSearchTerm(e.target.value)} placeholder='Where are you ?' />
            <div id="searchBtn" onClick={handleSearch}><img src={searchIcone} alt="search icone" /></div>
        </div>
    );
};

export default SearchBar;
