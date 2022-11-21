import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartState from "./context/cart/CartState";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <div className="app-container">
        <CartState>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/shop" element={<ItemListContainer />} />

            <Route
              path="/shop/category/:category"
              element={<ItemListContainer />}
            />

            <Route path="/item/detail/:id" element={<ItemDetailContainer />} />

            <Route path="/about" element={<About />} />

            <Route
              path="*"
              element={<h1>Error 404 - Pagina no encontrada.</h1>}
            />
          </Routes>
          <Cart />
        </CartState>
      </div>
    </>
  );
}

export default App;
