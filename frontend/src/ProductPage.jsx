// src/ProductPage.js
import React from 'react';
import ProductList from './ProductList'; // Importa o componente ProductList

function ProductPage() {
  return (
    <div>
      <h1>Produtos</h1>
      <ProductList /> {/* Inclui a lista de produtos*/}
    </div>
  );
}

export default ProductPage;
