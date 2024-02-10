import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import City from './pages/City'
import Forecast from './pages/Forecast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import useOpenweatherApi from './hooks/useOpenweatherApi'
import './App.scss'

function App() {
  const { response, loading, error, fetchDataFiveDays } = useOpenweatherApi();
  const [dataFiveDays, setDataFiveDays] = useState(null)
  const [searchTerm, setSearchTerm] = useState('');
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFiveDays(searchTerm); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData(); 
  }, [searchTerm]);

  useEffect(() => {
    setDataFiveDays(response);
  },[response])

  const onSearch = (term) => {
    setSearchTerm(term)
  }


  return (
    <BrowserRouter>
    <Navbar onSearch={onSearch}/>
    <main>
      <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/City/:cityName" element={<City dataFiveDays={dataFiveDays} onSearch={onSearch}/>} />
      <Route path="/City/:cityName/forecast/:day" element={<Forecast dataFiveDays={dataFiveDays} />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
  )
}

export default App
