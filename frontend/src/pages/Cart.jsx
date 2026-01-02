import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1 className="title">Your Shopping Bag 🛍️</h1>
      <div className="grid">
        {cart.length === 0 ? (
          <p>Your bag is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.name}</h3>
              <p style={{ color: "#bbb" }}>${item.price}</p>

              <button
                className="btn"
                style={{ background: "linear-gradient(135deg, #ff5f5f, #c0392b)" }}
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
