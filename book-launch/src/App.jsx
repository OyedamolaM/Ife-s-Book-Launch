// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutBook from "./components/AboutBook";
import AuthorBio from "./components/AuthorBio";
import Footer from "./components/Footer";
import SecondSection from "./components/SecondSection";

import CartPage from "./pages/CartPage";
import PaymentSection from "./pages/PaymentSection";
import Testimonials from "./pages/Testimonials";
import BookPreview from "./pages/BookPreview"; // ✅ add preview page

import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Navbar />

          <main className="main-content">
            <Routes>
              {/* Home Page */}
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <SecondSection />
                    <AboutBook />
                    <AuthorBio />
                  </>
                }
              />

              {/* Book Preview Page */}
              <Route path="/book-preview" element={<BookPreview />} />

              {/* Cart Page */}
              <Route path="/cart" element={<CartPage />} />

              {/* Payments Page */}
              <Route path="/payments" element={<PaymentSection />} />

              {/* Testimonials Page */}
              <Route path="/testimonials" element={<Testimonials />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
