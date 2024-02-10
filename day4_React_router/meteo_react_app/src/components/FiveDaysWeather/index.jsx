import { React, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { convertWeatherToImg, convertKelvinToCelsius, convertDatetimeToDate  } from '../../utils/convertUtils';
import './index.scss'

const FiveDaysWeather = ({ dataFiveDays, onSearch }) => {
    const navigate = useNavigate
    const { cityName } = useParams()

    useEffect(() => {
        if (cityName) {
            console.log('cityName :', cityName);
            onSearch(cityName);
            // navigate(`/City/${cityName}`);
        }
    }, [cityName, onSearch]);

    return (
        <>
            <h1 className='city'>{dataFiveDays ? dataFiveDays.city.name : ''} Forcast - Next 5 days</h1>

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