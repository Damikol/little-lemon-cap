import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer>
            <div>
        <img src={require('')} alt="Footer Logo" />
        <p>Contact: example@example.com</p>
        <p>Address: 123 Main Street, City, Country</p>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} Little Lemon Restaurant</p>
        <p>
          <a href="https://www.facebook.com/littlelemon">
            <img src={require('')} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/littlelemon">
            <img src={require('')} alt="Instagram" />
          </a>
          <a href="https://www.twitter.com/littlelemon">
            <img src={require('')} alt="Twitter" />
          </a>
        </p>
      </div>

      {/* Doormat Navigation */}
      <nav className="doormat-navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/online-order">Online Order</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer