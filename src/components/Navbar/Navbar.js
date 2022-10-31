import React, { useState } from "react";
import CartWidgets from "../CartWidgets/CartWidgets";
import logo_letters from "../../logo_letters_transparent.png";
import { Link, NavLink } from "react-router-dom";
import { getCategories } from "../../utils/getProducts";

const Navbar = () => {
  const categories = getCategories();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleLeave = () => {
    setOpen(false);
  };
  return (
    <nav className="header__nav">
      <Link to="/" className="nav__link">
        Home
      </Link>
      <NavLink to="/shop" className="nav__link">
        Shop
      </NavLink>
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
          onMouseLeave={handleLeave}
        >
          {categories.map((category) => {
            return (
              <Link
                to={`/shop/${category}`}
                className="nav__link nav__link--category"
              >
                {category}
              </Link>
            );
          })}
          {/* <Link to="/shop/hoodies" className="nav__link nav__link--category">
            Hoodies
          </Link>
          <Link to="/shop/jackets" className="nav__link nav__link--category">
            Jackets
          </Link>
          <Link to="/shop/pants" className="nav__link nav__link--category">
            Pants
          </Link>
          <Link to="/shop/tshirts" className="nav__link nav__link--category">
            T-shirts
          </Link>
          <Link
            to="/shop/accessories"
            className="nav__link nav__link--category"
          >
            Accessories
          </Link> */}
        </div>
      </div>

      <NavLink to="/about" className="nav__link">
        About
      </NavLink>
      <CartWidgets />
    </nav>
  );
};

export default Navbar;
