// src/pages/BookPreview.jsx
import React, { useState } from "react";
import "./BookPreview.scss";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function BookPreview() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: 1,
      title: "90-Day Easy Wellness Content Ideas",
      price: 2000, // ₦
    });
    navigate("/cart");
  };

  return (
    <section className="book-preview">
      <div className="container">
        {/* Book image */}
        <div className="preview-image">
          <img src="/images/bg-book-cover.png" alt="Wellness Book Cover" />
        </div>

        {/* Book details */}
        <div className="preview-details">
          <h2>90-Day Easy Wellness Content Ideas</h2>
          <p className="tagline">
            Never run out of content ideas again — made for wellness creators & brands.
          </p>

          {!showMore ? (
            <button
              className="toggle-btn"
              onClick={() => setShowMore(true)}
            >
              Read More ⬇
            </button>
          ) : (
            <>
              <p>
                This workbook gives you <strong>90 ready-to-use content prompts</strong> 
                that help you show up online consistently. Whether you want to educate, 
                inspire, or sell, you’ll always know what to post.
              </p>

              <h3>What you’ll get:</h3>
              <ul>
                <li>✅ 90 content prompts across 3 months</li>
                <li>✅ Storytelling hooks for wellness brands</li>
                <li>✅ Step-by-step frameworks</li>
                <li>✅ A simple system to stay consistent</li>
              </ul>

              <button
                className="toggle-btn"
                onClick={() => setShowMore(false)}
              >
                Read Less ⬆
              </button>
            </>
          )}

          <div className="price-box">
            <h3>Price: ₦2,000</h3>
          </div>

          <button className="buy-btn" onClick={handleAddToCart}>
            Add to Cart & Checkout
          </button>
        </div>
      </div>

      {/* Preview sample section */}
      <div className="sample-preview">
        <h3>📖 Sneak Peek Inside</h3>
        <img
          src="/images/sample-page.png"
          alt="Sample Page Preview"
          className="sample-img"
        />
        <p className="small-note">Tap to zoom in for details.</p>
      </div>
    </section>
  );
}
