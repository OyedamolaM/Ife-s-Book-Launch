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
            The <strong>90-Day Easy Wellness Content Ideas</strong> workbook is your ultimate guide
            to never run out of content inspiration. Designed for wellness coaches and brands,
            it’s filled with ready-to-use prompts that help you show up consistently online.
          </p>
          <p>
            Whether you want to educate, inspire, or promote your services, this workbook gives
            you actionable ideas you can implement immediately. Stay consistent, save time, and
            build a confident online presence.
          </p>
          
          <ul>
            <li>90 ready-to-use content prompts</li>
            <li>Step-by-step frameworks for effortless planning</li>
            <li>Practical examples you can replicate instantly</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
