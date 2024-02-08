import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './App.scss'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
    <main>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </main>
  </BrowserRouter>
  )
}

export default App
