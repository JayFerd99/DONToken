import React, { useState } from "react";

const TokenCard = ({ name, symbol, image }) => {
  const [hovered, setHovered] = useState(false);
  let value;

  if (symbol === "BTC") {
    value = hovered ? "2098.3 USD" : "1934.5 USD";
  } else if (symbol === "ETH") {
    value = hovered ? "455.2 USD" : "412.8 USD";
  } else if (symbol === "₮HT") {
    value = hovered ? "11.50 USD" : "10.00 USD";
  } else {
    value = hovered ? "Custom Hovered Value" : "Custom Default Value";
  }

  return (
    <div
      className="token-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div className="token-info">
        <img className="token-logo" src={image} alt={`${name} Logo`} />

        <div className="token-title-container">
          <span className="token-title">{name}</span>
          <span className="token-title-long">{symbol}</span>
        </div>
      </div>
      <div className="token-value">{value}</div>
    </div>
  );
};

export default TokenCard;
