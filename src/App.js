import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import nike_hoodie from "./nike_hoodie.png";
function App() {
  return (
    <div className="home-container">
      <Header />
      <h1 className="home-container__title">THE VINTAGE STORE</h1>
      <button className="home-container__cta">SHOP NOW</button>
      <img
        src={nike_hoodie}
        alt="nike hoodie"
        className="home-container__image"
      />
      {/* <ItemListContainer greeting="Hello coders!" /> */}
    </div>
  );
}

export default App;
