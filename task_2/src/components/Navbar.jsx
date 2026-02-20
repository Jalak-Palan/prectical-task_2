import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">Cart ({cart.length})</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default Navbar;