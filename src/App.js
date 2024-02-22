import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'; // Importe o NavBar
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar /> {/* Inclua o NavBar aqui */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        {/* Adicione mais rotas conforme necessário */}
      </Routes>
    </div>
  );
}

export default App;
