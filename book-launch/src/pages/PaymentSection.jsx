// src/pages/PaymentSection.jsx
import React, { useState } from "react";
import PaystackPop from "@paystack/inline-js";
import "./PaymentSection.scss";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function PaymentSection() {
  const PUBLIC_KEY = "pk_test_0e0f6b8e4c084578cfffe327945dc65866cc2837"; // Replace with your Paystack test key
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  // ✅ Hooks always at the top
  const [buyerName, setBuyerName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState("");

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const amountKobo = totalPrice * 100;

  const payWithPaystack = () => {
    if (!buyerName.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: PUBLIC_KEY,
      email,
      amount: amountKobo,
      metadata: {
        custom_fields: [
          {
            display_name: "Buyer Name",
            variable_name: "buyer_name",
            value: buyerName,
          },
          {
            display_name: "Cart Items",
            variable_name: "cart_items",
            value: cart.map((item) => item.title).join(", "),
          },
        ],
      },
      onSuccess: (transaction) => {
        setLoading(false);
        setSuccess(transaction);

        // Clear cart after success
        clearCart();

        // 👉 Send transaction.reference to your backend for verification
        // fetch("/api/verify-payment", { method: "POST", body: JSON.stringify({ reference: transaction.reference }) })
      },
      onCancel: () => {
        setLoading(false);
        setError("Transaction cancelled.");
      },
    });
  };

  // Early return if cart is empty
  if (cart.length === 0) {
    return (
      <section className="payment-empty">
        <div className="container">
          <h2>Your cart is empty</h2>
          <button onClick={() => navigate("/")}>Browse Books</button>
        </div>
      </section>
    );
  }

  // Success page
  if (success) {
    return (
      <section className="payment-success">
        <div className="container">
          <h3>Payment Successful ✅</h3>
          <p>Thank you {buyerName}, your order is confirmed!</p>
          <p>
            Reference: <strong>{success.reference || success.trxref}</strong>
          </p>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
      </section>
    );
  }

  return (
    <section className="payment-section">
      <div className="container">
        {/* Left side: Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          {cart.map((item, i) => (
            <div key={i} className="order-item">
              <img src="/images/bg-book-cover.png" alt={item.title} />
              <div className="details">
                <h4>{item.title}</h4>
                <p>₦{item.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
          <div className="total">
            <strong>Total:</strong> ₦{totalPrice.toLocaleString()}
          </div>
        </div>

        {/* Right side: Payment Form */}
        <div className="payment-form">
          <h3>Checkout</h3>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={buyerName}
              onChange={(e) => setBuyerName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button onClick={payWithPaystack} disabled={loading}>
            {loading ? "Opening Paystack..." : `Pay ₦${totalPrice.toLocaleString()}`}
          </button>

          <p className="secure-note">🔒 Secure payment powered by Paystack</p>
        </div>
      </div>
    </section>
  );
}
