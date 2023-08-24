import React from "react";
import Card from "./Card";
import { FaDiscord, FaApple, FaYoutube, FaCcStripe } from "react-icons/fa";

const SocialMediaPromotion = ({ tapImage }) => {
  return (
    <div className="social-media-promotion-container">
      <Card>
        <img src={tapImage} alt="Click" className="tap-image" />
        <div className="social-media-promotion-text">
          <h2>
            <span className="higlighted">Join</span> our community
          </h2>
        </div>
        <div className="social-media-promotion-icons">
          <a href="/">
            <FaDiscord />
          </a>
          <a href="/">
            <FaYoutube />
          </a>
          <a href="/">
            <FaApple />
          </a>
          <a href="/">
            <FaCcStripe />
          </a>
        </div>
      </Card>
    </div>
  );
};

export default SocialMediaPromotion;
