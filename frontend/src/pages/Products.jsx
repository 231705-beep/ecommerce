import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    fetch(`${apiUrl}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Luxury Collection 💎</h1>
      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="card" style={{ textAlign: "center" }}>
            <img
              src={`/${p.image}`}
              width="100%"
              style={{ borderRadius: "10px", marginBottom: "10px" }}
              alt={p.name}
            />
            <h3>{p.name}</h3>
            <p style={{ color: "#b1b1b1" }}>${p.price}</p>
            <Link to={`/products/${p.id}`}>
              <button className="btn">View</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
