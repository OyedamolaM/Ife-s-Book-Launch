// src/components/AboutBook.jsx
import React from "react";
import "./AboutBook.scss";

export default function AboutBook() {
  return (
    <section className="about-book">
      <div className="about-container">
        {/* Left: Book image */}
        <div className="book-image">
          <img src="/images/bg-book-cover.png" alt="About the Book" />
        </div>

        {/* Right: Text */}
        <div className="book-text">
          <h2>About the Book</h2>
          <p>
            This book is your ultimate guide to creating endless content ideas
            without the stress. Designed for wellness founders and creatives
            who want to show up consistently online.
          </p>
          <ul>
            <li>✅ 90 Done-for-you content prompts</li>
            <li>✅ Step-by-step frameworks</li>
            <li>✅ Practical examples you can copy</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
