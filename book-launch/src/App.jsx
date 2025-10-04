import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutBook from "./components/AboutBook";
import AuthorBio from "./components/AuthorBio";
import Footer from "./components/Footer";
import SecondSection from "./components/SecondSection";

import CartPage from "./pages/CartPage";
import PaymentSection from "./pages/PaymentSection";
import Testimonials from "./pages/Testimonials";
import BookPreview from "./pages/BookPreview";

import { CartProvider } from "./context/CartContext";

// AnimatedRoutes component to handle all page transitions
function AnimatedRoutes() {
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <Motion.div {...pageTransition}>
              <Hero />
              <SecondSection />
              <AboutBook />
              <AuthorBio />
            </Motion.div>
          }
        />

        {/* Book Preview Page */}
        <Route
          path="/book-preview"
          element={
            <Motion.div {...pageTransition}>
              <BookPreview />
            </Motion.div>
          }
        />

        {/* Cart Page */}
        <Route
          path="/cart"
          element={
            <Motion.div {...pageTransition}>
              <CartPage />
            </Motion.div>
          }
        />

        {/* Payments Page */}
        <Route
          path="/payments"
          element={
            <Motion.div {...pageTransition}>
              <PaymentSection />
            </Motion.div>
          }
        />

        {/* Testimonials Page */}
        <Route
          path="/testimonials"
          element={
            <Motion.div {...pageTransition}>
              <Testimonials />
            </Motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

// Main App component
export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
