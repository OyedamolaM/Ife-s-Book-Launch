// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutBook from "./components/AboutBook";
import AuthorBio from "./components/AuthorBio";
import PaymentSection from "./pages/PaymentSection";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import SecondSection from "./components/SecondSection";

export default function App() {
  return (
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

            {/* Payments Page */}
            <Route path="/payments" element={<PaymentSection />} />

            {/* Testimonials Page */}
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
