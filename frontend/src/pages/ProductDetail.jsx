import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    fetch(`${apiUrl}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        const p = data.find((item) => item.id === parseInt(id));
        setProduct(p);
      })
      .catch((err) => console.error("Error fetching product detail:", err));
  }, [id]);

  if (!product) return <div className="container">Loading product details...</div>;

  return (
    <div className="container">
      <div className="card" style={{ textAlign: "center" }}>
        <img
          src={`/${product.image}`}
          width="220"
          style={{ borderRadius: "12px", marginBottom: "15px" }}
          alt={product.name}
        />
        <h2>{product.name}</h2>
        <p style={{ color: "#cfcfcf", marginBottom: "20px" }}>
          Price: ${product.price}
        </p>

        <button
          className="btn"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
