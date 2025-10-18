import React from 'react';

const products = [
  {
    id: 1,
    name: "Fx Samba OG men's sneakers shoes - warm vanilla",
    price: 89.99,
    image: 'https://www.footlocker.ph/media/catalog/product/cache/f57d6f7ebc711fc328170f0ddc174b08/0/8/0803-ADIJS353301810H-1.jpg',
  },
  {
    id: 2,
    name: 'Echo unisex clog - slate grey',
    price: 74.99,
    image: 'https://www.footlocker.ph/media/catalog/product/cache/f57d6f7ebc711fc328170f0ddc174b08/0/8/0803-CCZ2079370DAGREM14-1.jpg',
  },
  {
    id: 3,
    name: "Adizero evo sl men's shoes - white",
    price: 59.99,
    image: 'https://www.footlocker.ph/media/catalog/product/cache/f57d6f7ebc711fc328170f0ddc174b08/0/8/0803-ADIJH620600W10H-1.jpg',
  },
];

const Products = ({ addToCart }) => (
  <main className="products-page">
    <h2 className="products-title">Shop All Shoes</h2>
    <div className="products-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  </main>
);

export default Products;
