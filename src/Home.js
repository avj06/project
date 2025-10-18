import React from 'react';
import { Link } from 'react-router-dom';

const sampleShoes = [
  {
    id: 1,
    name: "Fx Samba OG men's sneakers shoes - warm vanilla",
    price: 89.99,
    originalPrice: 109.99,
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
    originalPrice: 79.99,
    image: 'https://www.footlocker.ph/media/catalog/product/cache/f57d6f7ebc711fc328170f0ddc174b08/0/8/0803-ADIJH620600W10H-1.jpg',
  },
  {
    id: 4,
    name: "Nike Air Max 90 - white/grey",
    price: 3119.00,
    originalPrice: 6895.00,
    image: 'https://www.footlocker.ph/media/catalog/product/cache/f57d6f7ebc711fc328170f0ddc174b08/0/8/0803-NEWWS327GDFU006H-1.jpg',
  },
  {
    id: 5,
    name: "Nike Air Force 1 '07 - classic white",
    price: 6895.00,
    image: 'https://www.footlocker.ph/media/catalog/product/cache/f57d6f7ebc711fc328170f0ddc174b08/0/8/0803-NEWWS327KA00008H-1.jpg',
  },
  {
    id: 6,
    name: "Nike Dunk Low Retro - black/white",
    price: 6895.00,
    image: 'https://www.footlocker.ph/media/catalog/product/cache/f57d6f7ebc711fc328170f0ddc174b08/0/8/0803-NEWM1000MEW00W08H-1.jpg',
  },
  {
    id: 7,
    name: "New Balance 530 - silver/navy",
    price: 5995.00,
    image: 'https://www.footlocker.ph/media/catalog/product/cache/f57d6f7ebc711fc328170f0ddc174b08/0/8/0803-NIKFZ15160010SV011-1.jpg',
  },
  {
    id: 8,
    name: "ASICS GEL-1130 Men's Sportstyle - white/green",
    price: 5395.00,
    originalPrice: 6295.00,
    image: 'https://www.footlocker.ph/media/catalog/product/cache/f57d6f7ebc711fc328170f0ddc174b08/0/8/0803-ONRM1010039700509H-1.jpg',
  },
];


const Home = ({ addToCart }) => (
  <main>
    {}
    <section className="hero-banner">
      <img
        src="https://www.footlocker.ph/media/weltpixel/owlcarouselslider/images/a/d/adidas_evo_sl_desktop_3.jpg"
        alt="ASICS GEL-CUMULUS™ 16"
        className="hero-image"
      />
      <div className="hero-overlay">
        <h2>CULTURE IN MOTION</h2>
        <Link to="/products" className="cta-button">SHOP ASICS GEL-CUMULUS™ 16</Link>
      </div>
    </section>

    {}
    <section className="drop-of-week">
      <h3>Drop of the Week</h3>
      <div className="shoe-grid">
        {sampleShoes.map(shoe => (
          <div key={shoe.id} className="shoe-card">
            <div className="wishlist-icon">♡</div>
            <img src={shoe.image} alt={shoe.name} />
            <h4>{shoe.name}</h4>
            <p className="price">
              ${shoe.price.toFixed(2)}
              {shoe.originalPrice && (
                <span className="original-price">${shoe.originalPrice.toFixed(2)}</span>
              )}
            </p>
            <button onClick={() => addToCart(shoe)} className="add-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default Home;
