import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;