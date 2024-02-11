import React from 'react'
import OneDayWeather from '../../components/OneDayWeather'

const Forecast = ({dataFiveDays, onSearch}) => {


  return (
    <>
    <OneDayWeather dataFiveDays={dataFiveDays} onSearch={onSearch} />
    </>
  )
}

export default Forecast