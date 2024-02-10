import { React, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import sun from './img/sun.svg'
import cloud from './img/cloud.svg'
import rain from './img/rain.svg'
import snow from './img/snow.svg'
import './index.scss'

const FiveDaysWeather = ({ dataFiveDays, onSearch }) => {
    const navigate = useNavigate
    const { cityName } = useParams()

    if (cityName) {
        console.log('cityName :', cityName)
        onSearch(cityName);
        //navigate(`/City/${cityName}`);
    }

    const convertWeatherToImg = (weather) => {
        if (weather === 'Clear')
            return sun

        if (weather === 'Clouds')
            return cloud

        if (weather === 'Rain')
            return rain

        if (weather === 'Snow')
            return snow
    }

    const convertKelvinToCelsius = (kelvin) => {
        return (kelvin - 273.15).toFixed(1)
    }

    const convertDatetimeToDate = (datetime) => {
        const day = new Date(datetime)
        return day.toLocaleDateString('en-US', { weekday: 'long' })
    }


    return (
        <>
            <h1 className='city'>{dataFiveDays ? dataFiveDays.city.name : 'Home'} Forcast - Next 5 days</h1>

            <div className="cardContainer">
                {dataFiveDays ? [
                    dataFiveDays.list[0],
                    dataFiveDays.list[8],
                    dataFiveDays.list[16],
                    dataFiveDays.list[24],
                    dataFiveDays.list[32]
                ].map(day => (
                    <Link to={`/City/${dataFiveDays.city.name}/forecast/${convertDatetimeToDate(day.dt_txt)}`} key={day.dt_txt} >
                        <div className="card" >
                            <p className="card__date">{convertDatetimeToDate(day.dt_txt)}</p>
                            <img className="card__weatherDescription" src={convertWeatherToImg(day.weather[0].main)} />
                            <p className="card__temp">min <span>{convertKelvinToCelsius(day.main.temp_min)}°</span> max <span>{convertKelvinToCelsius(day.main.temp_max)}°</span></p>
                        </div>
                    </Link>
                )) : <p>Loading...</p>}
            </div>
        </>
    )
}

export default FiveDaysWeather