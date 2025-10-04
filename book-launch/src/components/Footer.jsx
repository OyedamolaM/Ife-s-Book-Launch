import React from "react";
import "./Footer.scss";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Correct import for X

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>Naija Nurse</h2>
          <p>Your go-to guide for wellness content ideas</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#second-section">Workbook</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/diariesofanaijanurse?igsh=bDk3ZGt2MnF2MDBv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/share/167vQiFJAH/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://x.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ifeoluwa-oluborode-9624241ab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Naija Nurse. All rights reserved.</p>
      </div>
    </footer>
  );
}
