// src/pages/PaymentSection.jsx
import React, { useState } from "react";
import PaystackPop from "@paystack/inline-js";
import "./PaymentSection.scss"; // create this file for styles

export default function PaymentSection() {
  const PUBLIC_KEY = "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxx"; // Replace with your Paystack test key
  const priceNaira = 1999;
  const amountKobo = priceNaira * 100;

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState("");

  const payWithPaystack = () => {
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
            display_name: "Book Title",
            variable_name: "book_title",
            value: "The Power of Words - Hardcover",
          },
        ],
      },
      onSuccess: (transaction) => {
        setLoading(false);
        setSuccess(transaction);
        console.log("Transaction Success:", transaction);
        // 👉 You should verify transaction.reference on your backend
      },
      onCancel: () => {
        setLoading(false);
        setError("Transaction cancelled.");
      },
    });
  };

  if (success) {
    return (
      <div className="payment-success">
        <h3>Payment Successful ✅</h3>
        <p>Thank you — your order is confirmed.</p>
        <p>
          Reference: <strong>{success.reference || success.trxref}</strong>
        </p>
      </div>
    );
  }

  return (
    <section className="payment-section">
      <div className="card">
        <h3>Get Your Copy</h3>
        <p className="book-details">Hardcover • 320 pages</p>

        <div className="price">
          ₦{priceNaira.toLocaleString()} <span>One-time payment</span>
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
        </div>

        <button onClick={payWithPaystack} disabled={loading}>
          {loading ? "Opening Paystack..." : `Pay ₦${priceNaira.toLocaleString()}`}
        </button>

        <p className="secure-note">Secure payment powered by Paystack</p>
      </div>
    </section>
  );
}
