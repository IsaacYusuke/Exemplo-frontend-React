// src/ProductList.js
import React from 'react';
import products from './productsData'; // Importa os dados dos produtos

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="price">{product.price}</p>
          <button>Comprar</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
