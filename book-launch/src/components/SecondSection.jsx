import React, { useEffect, useRef, useState } from "react";
import "./SecondSection.scss";
import womanImage from "../assets/woman-laptop.png"; 
import bookImage from "../assets/bg-book-cover.png"; 
import { FaRegLightbulb } from "react-icons/fa";
import { BiBookContent } from "react-icons/bi";
import { GiFeather } from "react-icons/gi";
import BuyNowButton from "./BuyNowButton"; // ✅ import button

export default function SecondSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="second-section">
      <div className="container">
        <div className="image-block">
          <img src={womanImage} alt="Woman thinking at laptop" />
        </div>

        <div className="text-block">
          <h2>
            Tired of asking yourself… <br />“What do I post today?”
          </h2>
          <ul className="problems">
            <li>😩 <span>Running out of ideas?</span></li>
            <li>⏳ <span>Spending hours brainstorming posts?</span></li>
            <li>😓 <span>Struggling to stay consistent?</span></li>
          </ul>
          <br />
          <div className="shortcut-text">
            <h2>Here's the Shortcut</h2>
            <p>
              90 ready-to-use content ideas designed for wellness brands,
              coaches & founders — so you can post consistently without the stress.
            </p>

            {/* ✅ First Buy Now button */}
            <BuyNowButton />
          </div>
        </div>
      </div>

      <div className="why-book">
        <div className="book-img">
          <img src={bookImage} alt="Book Cover" />
        </div>
        <div className="why-text">
          <h2>Why the Book Launch</h2>
          <p>
            Taking a break on LinkedIn last year made me realize the struggle of health brands,
            including wellness founders, face to create content.
          </p>
          <p>
            Content creation starts with the Ideation phase, and many wellness brands/founder get stuck in this phase.
          </p>
          <p>
            This is why I have come up with a solution to help wellness founders/brands with a ready-to-use content bank.
          </p>
          <p>
            So, say goodbye to stress, blank pages, and get instant access to your Wellness Content Bank today so you never run out of ideas again.
          </p>

          {/* ✅ Second Buy Now button */}
          <BuyNowButton />
        </div>
      </div>

      <div ref={sectionRef} className="whats-inside">
        <h3 className={visible ? "visible" : ""}>What's inside</h3>
        <div className="icons">
          <div className={`icon-item ${visible ? "visible" : ""}`}>
            <BiBookContent size={40} className="icon" />
            <p>Content ideas for engagement</p>
          </div>
          <div className={`icon-item ${visible ? "visible" : ""}`}>
            <GiFeather size={40} className="icon" />
            <p>Storytelling prompts</p>
          </div>
          <div className={`icon-item ${visible ? "visible" : ""}`}>
            <FaRegLightbulb size={40} className="icon" />
            <p>Wellness-specific hooks</p>
          </div>
        </div>

        {/* ✅ Third Buy Now button at the bottom */}
        <div className="cta-bottom">
          <BuyNowButton />
        </div>
      </div>
    </section>
  );
}
