import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import nike_hoodie from "../../nike_hoodie.png";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <h1 className="home-container__title">THE VINTAGE STORE</h1>

      <button className="home-container__cta">
        <Link to="/shop">SHOP NOW</Link>
      </button>

      <img
        src={nike_hoodie}
        alt="nike hoodie"
        className="home-container__image"
      />
    </div>
  );
};

export default Home;
