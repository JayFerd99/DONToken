import React from "react";
import TokenCard from "./TokenCard";
import btcImage from "../assets/bitcoin (2).png";
import etcImage from "../assets/ethereum.png";
import theImage from "../assets/tether.png";

const FeatureOne = () => {
  return (
    <div className="feature-container">
      <div className="swap-token-container">
        <div className="tokens-container">
          <TokenCard name="" symbol="BTC" image={btcImage} />
          <TokenCard name="" symbol="ETH" image={etcImage} />
          <TokenCard name="" symbol="₮HT" image={theImage} />
        </div>

        <div className="btn-container">
          <button className="primary">SWAP</button>
        </div>
      </div>
      <div className="feature-description">
        <div className="feature-description-title">
          <h1>
            <span className="highlighted">Swap</span> Any Token, Any Chain
          </h1>
        </div>
        <p className="feature-description-paragraph">
          We've created <strong>DONTOKEN </strong>to help you make cross-chain
          swaps in just a few clicks. You'll be able to easily convert your
          coins from one blockchain to another, or trade them for other
          cryptocurrencies and tokens.
        </p>
        <div className="btn-container">
          <button className="secondary">
            <span>Start Swapping</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
