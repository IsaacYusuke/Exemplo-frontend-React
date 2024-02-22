import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/router/items/') // Ajuste a URL para seu endpoint específico
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error("Houve um erro ao buscar os produtos:", error));
  }, []);

  return (
    <div>
      <h2>Produtos</h2>
      <ul className="product-grid">
        {products.map(product => (
            <li key={product.id}>
                <img src={product.imagem} alt={product.nome} style={{ height: '100px', width: 'auto' }} />
                <h3>{product.nome}</h3>
                <p>{product.descricao}</p>
                <p>R$ {product.preco}</p>
            </li>
         ))} 
      </ul>
    </div>
  );
}

export default ProductList;
