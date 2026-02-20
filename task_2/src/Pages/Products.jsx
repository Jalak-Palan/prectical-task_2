import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        const unique = ["All", ...new Set(data.map((p) => p.category))];
        setCategories(unique);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selected === "All") {
      setFiltered(products);
    } else {
      setFiltered(products.filter((p) => p.category === selected));
    }
  }, [selected, products]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">
      <select onChange={(e) => setSelected(e.target.value)}>
        {categories.map((cat, i) => (
          <option key={i}>{cat}</option>
        ))}
      </select>

      <div className="grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;