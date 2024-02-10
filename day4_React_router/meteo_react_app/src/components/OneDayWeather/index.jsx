import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { convertWeatherToImg, convertKelvinToCelsius, convertDatetimeToDate  } from '../../utils/convertUtils';
import drop from './img/drop.svg'
import arrow from './img/arrow.svg'
import './index.scss'

const OneDayWeather = ({ dataFiveDays }) => {
    const { day } = useParams();

    const dateToExtract = (data) => {
        let dateToFind = null;

        if (data !== undefined) {
            const dayToConvert = data.list.find(e => convertDatetimeToDate(e.dt_txt) === day);
            dateToFind = dayToConvert.dt_txt.split(" ")[0];
        }
        return dateToFind
    };


    return (
        <div>
            <h1>{dataFiveDays ? dataFiveDays.city.name : ''} Forcast - {day.charAt(0).toUpperCase() + day.slice(1)} </h1>

            <div className="cardContainer2">
                {dataFiveDays ? dataFiveDays.list
                    .filter(e => e.dt_txt.split(" ")[0] === dateToExtract(dataFiveDays))
                    .map(element => (
                        <div className="card2" key={element.dt_txt}  >
                            <p className="card2__temp">{convertKelvinToCelsius(element.main.temp_max)}°</p>
                            <p className="card2__date">{element.dt_txt.split(" ")[1].split(":").slice(0, 2).join(":")}</p>
                            <img className="card2__weatherDescription" src={convertWeatherToImg(element.weather[0].main)} />
                            <p className='card2__humidity'><img src={drop} alt="drop" /> {element.main.humidity}%</p>
                            <p className="card2__wind"><img src={arrow} alt="drop" /> {element.wind.speed}km/h</p>
                        </div>
                    )) : <p>Loading...</p>}
            </div>
        </div>
    )
}

export default OneDayWeather