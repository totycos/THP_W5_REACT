import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Book from './components/Book';
import Documentation from './pages/Documentation';
import Navbar from './components/Navbar';
import './App.scss'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/book/:bookSlug" element={<Book />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
