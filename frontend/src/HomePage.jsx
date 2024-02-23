import React from 'react';
import myImage from './welcome_image.webp';

function HomePage() {
  return (
    <div>
      <h1>Bem-vindo à Minha Loja</h1>
      <div className="image-container">
        <img src={myImage} alt="Descrição" />
      </div>
      {/* Conteúdo da página inicial */}
    </div>
  );
}

export default HomePage;
