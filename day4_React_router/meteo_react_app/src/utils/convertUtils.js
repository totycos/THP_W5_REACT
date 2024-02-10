import sun from './img/sun.svg'
import cloud from './img/cloud.svg'
import rain from './img/rain.svg'
import snow from './img/snow.svg'

// Replace weather word by its icone
export const convertWeatherToImg = (weather) => {
    if (weather === 'Clear')
        return sun

    if (weather === 'Clouds')
        return cloud

    if (weather === 'Rain')
        return rain

    if (weather === 'Snow')
        return snow
}

// Convert Kelvin temperature tp Celsius
export const convertKelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1)
}

// Convert DateTime format to Day in English : Monday, Tuesday,...
export const convertDatetimeToDate = (datetime) => {
    const day = new Date(datetime)
    return day.toLocaleDateString('en-US', { weekday: 'long' })
}