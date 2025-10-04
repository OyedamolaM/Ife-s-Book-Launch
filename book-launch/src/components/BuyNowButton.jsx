// src/components/BuyNowButton.jsx
import "./BuyNowButton.scss";
import React from "react";
import { useCart } from "../context/CartContext"; 
import { useNavigate } from "react-router-dom";

export default function BuyNowButton() {
  const { addToCart } = useCart(); // use hook instead of useContext directly
  const navigate = useNavigate();

  const handleBuyNow = () => {
    addToCart({
      id: 1,
      name: "Wellness Book for Health Content Creators",
      price: 2000, // ₦
    });
    navigate("/book-preview");
  };

  return (
    <button className="cta-btn" onClick={handleBuyNow}>
      Get your copy Now
    </button>
  );
}
