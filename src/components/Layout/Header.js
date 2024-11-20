import React from 'react';
import classes from './Header.module.css'; // For styling (we'll create this next)
import CartButton from './CartButton'; // Import CartButton component for the cart section

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>
      <div className={classes['main-image']}>
        <img
          src="https://via.placeholder.com/1500x400" // Replace with your image URL
          alt="A table full of delicious food!"
        />
      </div>
    </>
  );
};

export default Header;
