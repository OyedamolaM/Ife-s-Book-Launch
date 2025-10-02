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
            Hi, I’m Ifeoluwa Oluborode — a registered Paediatric Nurse, wellness writer, content creator, and
            coach. I’ve helped hundreds of founders grow their online presence
            without burning out. This book is a reflection of my experience,
            packed with practical strategies you can use right away.
          </p>
          <p className="quote">
            “Consistency beats perfection every single time.”
          </p>
        </div>
      </div>
    </section>
  );
}
