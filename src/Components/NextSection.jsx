import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { FaDiscord, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";

const NextSection = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const typingDelay = 75;
  const typingTexts = [
    "Discover the power of our innovative token and unlock a world of possibilities in the realm of decentralized finance.",
    "Join us on this transformative journey towards financial freedom.",
  ];

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentText = typingTexts[typingIndex];
      setTypewriterText(currentText.slice(0, typewriterText.length + 1));

      if (typewriterText.length === currentText.length - 1) {
        clearInterval(typingInterval);

        // Move to the next text after a pause
        setTimeout(() => {
          const nextIndex = (typingIndex + 1) % typingTexts.length;
          setTypingIndex(nextIndex);
          setTypewriterText("");
        }, 2000);
      }
    }, typingDelay);

    return () => clearInterval(typingInterval);
  }, [typingIndex, typewriterText, typingTexts]);

  return (
    <div className="hero-section-container">
      <div className="hero-info-wrapper">
        <div className="hero-info-text">
          <h1>
            The Next Innovation in{" "}
            <span className="highlighted">Decentralized</span> cross-chain
            Exchange
          </h1>
          <p className="hero-info-description">{typewriterText}</p>
        </div>
        <div className="search-container">
          <div className="search-input-wrapper">
            <RiSearchLine />
            <input
              className="search-input"
              placeholder="Search for more options..."
            />
          </div>
          <button className="button_primary">
            <span className="start-swap">Search</span>
          </button>
        </div>
        <div className="social-links-container">
          <div className="social-links">
            <a href="/">
              <FaTelegram />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaYoutube />
            </a>
            <a href="/">
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image-container"></div>
    </div>
  );
};

export default NextSection;
