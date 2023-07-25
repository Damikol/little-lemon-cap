import React from 'react';
import './styles.css';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/online-order">Online Order</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav