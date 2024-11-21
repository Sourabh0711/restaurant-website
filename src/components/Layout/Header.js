import React from 'react';
//import classes from './Header.module.css'; // For styling (we'll create this next)
//import CartButton from './CartButton'; // Import CartButton component for the cart section
import '../UI/App.css';

const Header = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">ReactMeals</h1>
        <button className="cart-button">Your Cart (0)</button>
      </header>

      {/* Fullscreen Image with Descriptive Box */}
      <div className="image-container">
        {/* Descriptive Text Box */}
        <div className="text-box">
          <h1 className="main-heading">Delicious Food, Delivered To You</h1>
          <p className="subtext">
            Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.<br />
            All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
          </p>
        </div>

        {/* Menu Box Hovering Above the Image */}
        <div className="menu-box">
          <h2 className="menu-heading">Our Menu</h2>
          <ul className="menu-list">
            <li className="menu-item">
              <div>
                <h3>Paneer Butter Masala</h3>
                <p>Indian Cuisine</p>
              </div>
              <span className="price">₹15</span>
            </li>
            <li className="menu-item">
              <div>
                <h3>Chole</h3>
                <p>Indian Cuisine</p>
              </div>
              <span className="price">₹15</span>
            </li>
            <li className="menu-item">
              <div>
                <h3>Palak Paneer</h3>
                <p>Indian Cuisine</p>
              </div>
              <span className="price">₹15</span>
            </li>
            <li className="menu-item">
              <div>
                <h3>Kofte</h3>
                <p>Indian Cuisine</p>
              </div>
              <span className="price">₹15</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;