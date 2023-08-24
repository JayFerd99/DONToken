import React from "react";

const Card = ({ title, imgUrl, children }) => {
  return (
    <div className="card-container">
      {imgUrl && <img src={imgUrl} alt={title} />}
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
