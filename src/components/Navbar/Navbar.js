import React from "react";
import CartWidgets from "../CartWidgets/CartWidgets";

const Navbar = () => {
  return (
    <nav className="header__nav nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="/" className="nav__link nav__link--cartWidget">
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
            Buzos
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Camperas
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Pantalones
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Accesorios
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
