import React from "react";
import "./Footer.scss";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Logo / Brand */}
        <div className="footer-brand">
          <h2>Ifeoluwa</h2>
          <p>Your go-to guide for wellness content ideas</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#second-section">Workbook</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ifeoluwa. All rights reserved.</p>
      </div>
    </footer>
  );
}
