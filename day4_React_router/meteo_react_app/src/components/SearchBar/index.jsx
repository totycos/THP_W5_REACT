import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './index.scss'
import searchIcone from './img/search.svg';

const SearchBar = ({ onSearch }) => {
    const [localSearchTerm, setLocalSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLocalSearchTerm(e.target.value)
    }

    const handleSearch = () => {
        const capitalizedLocalSearchTerm = localSearchTerm.charAt(0).toUpperCase() + localSearchTerm.slice(1)
        const currentStorageSearchedTerm = localStorage.storageSearchedTerm || '';
        localStorage.storageSearchedTerm = currentStorageSearchedTerm + capitalizedLocalSearchTerm + '-'
        onSearch(localSearchTerm);
        navigate(`/City/${capitalizedLocalSearchTerm}`);
    };

    const handleKeyDown = (e) => {
        // Vérifier si la touche pressée est "Enter" (code 13)
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="searchBar">
            <input type="text" name="searchBar" id="searchBar" onChange={handleChange} onKeyDown={handleKeyDown} placeholder='Search a city here' />
            <div id="searchBtn" onClick={handleSearch}><img src={searchIcone} alt="search icone" /></div>
        </div>
    );
};

export default SearchBar;
