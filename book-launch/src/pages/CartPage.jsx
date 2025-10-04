// src/pages/CartPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CartPage.scss";

export default function CartPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <section className="cart-page empty">
        <div className="container">
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven’t added anything yet.</p>
        </div>
      </section>
    );
  }

  const goToCheckout = () => {
    navigate("/payments");
  };

  // calculate total
  const total = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

  return (
    <section className="cart-page">
      <div className="container">
        <h2>Your Cart</h2>

        <div className="cart-items">
          {cart.map((book, index) => (
            <div key={index} className="cart-item">
              <img
                src={book.image || "/images/bg-book-cover.png"}
                alt={book.title}
                className="cart-item-img"
              />
              <div className="cart-item-info">
                <h3>{book.title}</h3>
                <p className="price">₦{book.price.toLocaleString()}</p>
                <p className="qty">Qty: {book.qty || 1}</p>
                <p className="subtotal">
                  Subtotal: ₦{(book.price * (book.qty || 1)).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Total: ₦{total.toLocaleString()}</h3>
        </div>

        <div className="cart-actions">
          <button onClick={goToCheckout}>Proceed to Checkout</button>
          <button onClick={clearCart} className="clear">
            Clear Cart
          </button>
        </div>
      </div>
    </section>
  );
}
