// src/components/Testimonials.jsx
import React from "react";

const reviews = [
  { quote: "A life-changing book!", author: "Sarah K." },
  { quote: "Beautifully written and inspiring.", author: "David L." },
  { quote: "I couldn’t put it down.", author: "Maria R." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">What Readers Are Saying</h3>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <blockquote key={i} className="bg-indigo-50 p-6 rounded-xl shadow-sm">
              <p className="text-gray-800 mb-4">“{r.quote}”</p>
              <footer className="text-sm font-semibold text-gray-700">— {r.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
