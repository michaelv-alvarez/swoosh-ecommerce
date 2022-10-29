import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:category" element={<Shop />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
