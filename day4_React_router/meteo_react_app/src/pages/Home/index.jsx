import { React } from 'react'
import FiveDaysWeather from '../../components/FiveDaysWeather'

const Home = ({ dataFiveDays }) => {


    return (
        <>
            <FiveDaysWeather dataFiveDays={dataFiveDays} />
        </>
    )
}

export default Home