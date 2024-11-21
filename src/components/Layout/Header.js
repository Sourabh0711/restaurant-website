import React from 'react';
//import classes from './Header.module.css'; // For styling (we'll create this next)
//import CartButton from './CartButton'; // Import CartButton component for the cart section


const Header = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">ReactMeals</h1>
        <button className="cart-button">Your Cart (0)</button>
      </header>

      {/* Fullscreen Image */}
      <div className="image-container">
        <img
          className="fullscreen-image"
          src="/Images/foodimage.jpg" // Path to your image
          alt="A table full of delicious food!"
        />
        {/* Box with Text */}
        <div className="text-box">
          <h1 className="main-heading">Delicious Food, Delivered To You</h1>
          <p className="subtext">
            Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.<br />
            All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
