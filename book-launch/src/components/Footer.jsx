// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          © {new Date().getFullYear()} The Power of Words. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-gray-300 hover:text-white text-sm">Twitter</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm">Instagram</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm">Contact</a>
        </div>
      </div>
    </footer>
  );
}
