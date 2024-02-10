import React from 'react'
import OneDayWeather from '../../components/OneDayWeather'

const Forecast = ({dataFiveDays}) => {


  return (
    <>
    <OneDayWeather dataFiveDays={dataFiveDays} />
    </>
  )
}

export default Forecast