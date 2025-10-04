// src/pages/Testimonials.jsx
import React from "react";
import "./Testimonials.scss";
import BuyNowButton from "../components/BuyNowButton"; // ✅ import button

export default function Testimonials() {
  const testimonials = [
    {
      name: "Adebola Solaja",
      role: "Wellness Brand Strategist",
      text: "This wellness book is super good! It's detailed, easy to follow, and leaves room for creativity. It has helped me reshape the way I design health content for my clients.",
    },
    {
      name: "Ifeoluwa Obawunmi",
      role: "Registered Nurse & Health Blogger",
      text: "The ebook is top-notch, to be honest! Very simple, easy to comprehend, and packed with insight. I love how it directs you not just to read but to apply the lessons. Highly recommended.",
    },
    {
      name: "Oyedamola Moreira",
      role: "MD, Savans Pharmacy",
      text: "As a health professional, I find this book inspiring and practical. It connects wellness, branding, and content creation in a way that motivates action.",
    },
    {
      name: "Oyebambo Moreira",
      role: "Content Creator",
      text: "I absolutely loved every chapter. The clarity made it enjoyable, yet it carried deep insights on how to build a consistent health brand online.",
    },
    {
      name: "Chinonso Okeke",
      role: "Fitness Coach & Online Educator",
      text: "This book gave me a fresh perspective on wellness storytelling. It’s practical, relatable, and shows exactly how to connect better with your audience.",
    },
    {
      name: "Kemi Balogun",
      role: "Lecturer, Public Health Department (UNILAG)",
      text: "The writing style is simple yet thought-provoking. It bridges theory with practice and is very useful for anyone teaching or mentoring in health communication.",
    },
    {
      name: "Tunde Adebayo",
      role: "Youth Wellness Mentor",
      text: "It’s more than a book—it’s a guide for impact. The lessons are timeless and help content creators use wellness narratives to inspire real change.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Readers Are Saying</h2>
        <p className="section-subtitle">
          Hear from professionals, creators, and wellness leaders who have read the book.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-text">“{t.text}”</p>
              <div className="testimonial-author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Buy Now button at bottom */}
        <div className="testimonial-cta">
          <BuyNowButton />
        </div>
      </div>
    </section>
  );
}
