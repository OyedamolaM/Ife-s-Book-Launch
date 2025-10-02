// src/components/AuthorBio.jsx
import React from "react";
import "./AuthorBio.scss";

export default function AuthorBio() {
  return (
    <section id="author" className="author-bio">
      <div className="author-container">
        {/* Left: Author photo */}
        <div className="author-image">
          <img src="/images/author.jpg" alt="Author" />
        </div>

        {/* Right: Bio */}
        <div className="author-text">
          <h2>Meet the Author</h2>
          <p>
            Hi, I'm Ifeoluwa Oluborode, a registered nurse, health writer, and content creator. <br />
            I've helped hundreds of health brands and founders grow their online presence through my teachings.
            <br />This book is packed with content ideas to help every wellness brand and founders stay consistent online.
          </p>
          <p className="quote">
            “Consistency beats perfection every single time.”
          </p>
        </div>
      </div>
    </section>
  );
}
