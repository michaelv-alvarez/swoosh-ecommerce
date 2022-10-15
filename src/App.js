import Header from "./components/Header/Header";
import heroMain from "./hero-main.png";
function App() {
  return (
    <>
      <div className="main">
        <Header />
        <div className="main__container">
          <div className="main__cta">
            <h1 className="main__title">The vintage vault</h1>
          </div>
          <div className="main__hero">
            <img src={heroMain} alt="main hero" className="main__image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
