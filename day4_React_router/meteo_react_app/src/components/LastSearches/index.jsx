import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const LastSearches = () => {
    const [searchedTerm, setSearchedTerm] = useState(localStorage.storageSearchedTerm)

    return (
        <div className='lastSearchesContainer'>
            {searchedTerm ? (
                <>
                    <h1 className='lastSearchesContainer__title'>The last visited cities :</h1>
                    <div className='lastSearchesCardContainer'>
                        {searchedTerm
                            .split('-')
                            .filter((e) => e !== '')
                            .filter((v, i, a) => a.indexOf(v) === i)
                            .slice(-5)
                            .map((city) => (
                                <div className="lastSearchesCard" key={city}>
                                    <Link to={`/City/${city}`}>
                                        <p className='lastSearchesCard__city'>{city}</p>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </>
            ) : (
                <p className='noResult'>Enter a city in the search bar.</p>
            )}
        </div>
    )
}

export default LastSearches