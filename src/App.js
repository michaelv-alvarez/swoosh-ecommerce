import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/shop" element={<Shop />} />

      <Route path="/shop/:category" element={<Shop />} />

      <Route path="/item/:id" element={<ItemDetailContainer />} />

      <Route path="/about" element={<About />} />

      <Route path="*" element={<h1>Error 404 - Pagina no encontrada.</h1>} />
    </Routes>
  );
}

export default App;
