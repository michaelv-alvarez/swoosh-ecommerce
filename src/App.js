import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import hero from "./hero.png";

function App() {
  return (
    <>
      <div className="home-container">
        <Header />
        <div className="hero">
          <div className="hero__description">
            <div className="title-container">
              <h1 className="hero__title">THE VINTAGE STORE</h1>
              <ItemListContainer greeting="Hello coders!" />
              <button className="hero__cta">SHOP NOW</button>
            </div>
          </div>
          <div className="hero__image">
            <img src={hero} alt="hero at home page" className="hero__img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
