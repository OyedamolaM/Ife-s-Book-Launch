import React from "react";
import "./SecondSection.scss";
import womanImage from "../assets/woman-laptop.png"; 
import bookImage from "../assets/bg-book-cover.png"; 
import { FaRegLightbulb } from "react-icons/fa";
import { BiBookContent } from "react-icons/bi";
import { GiFeather } from "react-icons/gi";

export default function SecondSection() {
  return (
    <section id="about" className="second-section">
      <div className="container">
        {/* Left side - Woman image */}
        <div className="image-block">
          <img src={womanImage} alt="Woman thinking at laptop" />
        </div>

        {/* Right side - Text */}
        <div className="text-block">
          <h2>Tired of asking yourself… <br />“What do I post today?”</h2>
          <ul className="problems">
            <li>😩 Running out of ideas</li>
            <li>⏳ Spending hours brainstorming posts</li>
            <li>😓 Struggling to stay consistent</li>
          </ul>
        </div>
      </div>

      {/* Shortcut Section */}
      <div className="shortcut">
        <div className="book-img">
          <img src={bookImage} alt="Book Cover" />
        </div>
        <div className="shortcut-text">
          <h3>Here's the Shortcut</h3>
          <p>
            90 ready-to-use content ideas designed for wellness brands,
            coaches & founders — so you can post consistently without the stress.
          </p>
        </div>
      </div>

      {/* What’s Inside Section */}
      <div className="whats-inside">
        <h3>What's inside</h3>
        <div className="icons">
          <div className="icon-item">
            <BiBookContent size={40} className="icon" />
            <p>Content ideas for engagement</p>
          </div>
          <div className="icon-item">
            <GiFeather size={40} className="icon" />
            <p>Storytelling prompts</p>
          </div>
          <div className="icon-item">
            <FaRegLightbulb size={40} className="icon" />
            <p>Wellness-specific hooks</p>
          </div>
        </div>
      </div>
    </section>
  );
}
