import React from "react";
import CartWidgets from "../CartWidgets/CartWidgets";

const Navbar = () => {
  return (
    <nav className="header__nav nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="/" className="cart-widgets">
            <CartWidgets />
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Shop
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Productos
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
