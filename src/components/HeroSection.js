import React from "react";
import './HeroSection.css'; // Ensure this path is correct

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAIT</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <button className="btn btn--outline">
          GET STARTED
        </button>
        <button className="btn btn--primary">
          WATCH TRAILER <i className="far fa-play-circle" />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
