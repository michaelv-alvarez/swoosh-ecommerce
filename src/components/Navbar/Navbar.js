import React, { useState } from "react";
import CartWidgets from "../CartWidgets/CartWidgets";
import logo_letters from "../../logo_letters_transparent.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className="header__nav">
      <Link to="/" className="nav__link">
        Home
      </Link>
      <Link to="/shop" className="nav__link">
        Shop
      </Link>
      <Link to="/">
        <img src={logo_letters} alt="Logo letters" className="nav__logo" />
      </Link>

      <div className="dropdown-menu">
        <button className="nav__link" onClick={handleOpen}>
          Products
        </button>
        <div
          className={`dropdown-menu__categories 
          ${open ? "active" : "inactive"}`}
        >
          <Link to="/" className="nav__link nav__link--category">
            Hoodies
          </Link>
          <Link to="/" className="nav__link nav__link--category">
            Jackets
          </Link>
          <Link to="/" className="nav__link nav__link--category">
            Pants
          </Link>
          <Link to="/" className="nav__link nav__link--category">
            T-shirts
          </Link>
          <Link to="/" className="nav__link nav__link--category">
            Accessories
          </Link>
        </div>
      </div>

      <a href="/" className="nav__link">
        About
      </a>
      <CartWidgets />
    </nav>
  );
};

export default Navbar;
