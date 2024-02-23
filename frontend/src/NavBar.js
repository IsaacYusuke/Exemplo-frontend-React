import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Produtos</Link></li>
        {/* Adicione mais links conforme necessário */}
      </ul>
    </nav>
  );
}

export default NavBar;
