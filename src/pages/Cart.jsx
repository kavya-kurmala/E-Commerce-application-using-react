import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Navbar title="My Cart" />

      <div className="page">
        <div className="card">
          <h3>Cart Items</h3>

          {cart.length === 0 && <p>Your cart is empty.</p>}

          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} />

              <div className="cart-info">
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>
                <p>⭐ {item.rating}</p>
              </div>

              <button
                className="delete-btn"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
