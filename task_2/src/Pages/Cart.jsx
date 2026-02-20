import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function Cart() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) return <h2>Cart is empty</h2>;

  return (
    <div className="container">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
          <p>₹ {item.price}</p>
        </div>
      ))}

      <h3>Total Items: {cart.length}</h3>
      <h3>Total Price: ₹ {totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;