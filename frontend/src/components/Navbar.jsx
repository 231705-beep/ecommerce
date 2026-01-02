import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartCount = useSelector(state => state.cart.length);

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
      fontSize: "18px"
    }}>
      <Link to="/" style={{ fontSize: "24px", fontWeight: "bold", color: "#b74fff" }}>
        E-Shop
      </Link>

      <div style={{ display: "flex", gap: "25px" }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">🛒 {cartCount}</Link>
      </div>
    </nav>
  );
}
