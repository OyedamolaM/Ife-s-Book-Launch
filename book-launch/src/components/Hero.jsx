import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Never Run Out of <br /> Content Ideas Again</h1>
          <p>
            A done-for-you bank of <span>90 content prompts</span> to help
            wellness founders show up consistently online.
          </p>
          <a href="#payment" className="cta-btn">
            Get My Copy Now
          </a>
        </div>
        <div className="hero-image">
          <img src="/images/bg-book-cover.png" alt="Book Cover" />
        </div>
      </div>
    </section>
  );
}
