import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title.substring(0, 40)}...</h4>
      <p>₹ {product.price}</p>
      <p>{product.category}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;