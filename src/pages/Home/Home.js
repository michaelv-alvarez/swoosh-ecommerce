import React from "react";
import { Link } from "react-router-dom";
import nike_hoodie from "../../nike_hoodie.png";
import Header from "../../components/Header/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <h1 className="home__title">THE VINTAGE STORE</h1>

        <Link to="/shop" className="home__cta">
          SHOP NOW
        </Link>

        <img src={nike_hoodie} alt="nike hoodie" className="home__image" />
      </div>
    </>
  );
};

export default Home;
