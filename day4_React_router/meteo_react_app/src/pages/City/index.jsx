import React from 'react'
import FiveDaysWeather from '../../components/FiveDaysWeather'

const City = ({ dataFiveDays, onSearch }) => {

  return (
    <>
      <FiveDaysWeather dataFiveDays={dataFiveDays} onSearch={onSearch} />
    </>
  )
}

export default City