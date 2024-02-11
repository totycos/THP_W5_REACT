import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { fetchDataCities } from '../../services/geoDbCitiesApi';
import searchIcone from './img/search.svg';
import './index.scss';

const useDebouncedValue = (value, wait) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const id = setTimeout(() => setDebouncedValue(value), wait);
        return () => clearTimeout(id);
    }, [value, wait]);

    return debouncedValue;
};

const SearchBar = ({ onSearch }) => {
    const [localSearchTerm, setLocalSearchTerm] = useState('');
    const [showProposal, setShowProposal] = useState(false);
    const [dataCities, setDataCities] = useState(null)
    const [selectetDone, setSelectDone] = useState(null)

    const navigate = useNavigate();

    const handleChange = (e) => {
        setLocalSearchTerm(e.target.value);
    };

    const handleSelect = (selectedCity) => {
        console.log(selectedCity)
        setLocalSearchTerm(selectedCity);
        setShowProposal(false)
        setSelectDone(!selectetDone)
    }

    useEffect(() => {
        if (selectetDone !== null) {
            handleSearch()
        }
    }, [selectetDone])

    useEffect(() => {
    }, [localSearchTerm])

    const handleSearch = () => {
        setShowProposal(false)
        const capitalizedLocalSearchTerm =
            localSearchTerm.charAt(0).toUpperCase() + localSearchTerm.slice(1);
        const currentStorageSearchedTerm =
            localStorage.storageSearchedTerm || '';
        localStorage.storageSearchedTerm =
            currentStorageSearchedTerm + capitalizedLocalSearchTerm + '-';
        onSearch(localSearchTerm);
        setLocalSearchTerm('')
        navigate(`/City/${capitalizedLocalSearchTerm}`);
    };


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const debouncedLocalSearchTerm = useDebouncedValue(localSearchTerm, 1000);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (debouncedLocalSearchTerm.length >= 3) {
                    const citiesData = await fetchDataCities(debouncedLocalSearchTerm);
                    console.log('citiesData:', citiesData)
                    setDataCities(citiesData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [debouncedLocalSearchTerm]);

    useEffect(() => {
        console.log('dataCities :', dataCities)
        setShowProposal(dataCities && dataCities.data)
    }, [dataCities])

    return (
        <div className="searchBarContainer">
            <div className="searchBar">
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={localSearchTerm}
                    placeholder="Search a city here"
                />
                <div id="searchBtn" onClick={handleSearch}>
                    <img src={searchIcone} alt="search icone" />
                </div>
            </div>
            <div className="proposal" style={{ display: showProposal && localSearchTerm.length >= 3 ? 'block' : 'none' }}>
                {dataCities && dataCities.data ? dataCities.data
                .filter((value, index, self) => self.findIndex(e => e.city === value.city) === index)
                .map(e => (
                    <p key={e.city} onClick={() => handleSelect(e.city)}>{e.city}</p>
                )) : ''}
            </div>
        </div>
    );
};

export default SearchBar;
