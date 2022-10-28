import React, { useState } from "react";
import CartWidgets from "../CartWidgets/CartWidgets";
import logo_letters from "../../logo_letters_transparent.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className="header__nav">
      <a href="/" className="nav__link">
        Home
      </a>
      <a href="/" className="nav__link">
        Shop
      </a>
      <img src={logo_letters} alt="Logo letters" className="nav__logo" />

      <div className="dropdown-menu">
        <button className="nav__link" onClick={handleOpen}>
          Products
        </button>
        <div
          className={`dropdown-menu__categories 
          ${open ? "active" : "inactive"}`}
        >
          <a href="/" className="nav__link .nav__link--cateogory">
            Categoria 1
          </a>
          <a href="/" className="nav__link .nav__link--cateogory">
            Categoria 2
          </a>
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
