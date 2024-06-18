//@ts-nocheck
import React from "react";

import "./Questioncard.css";

export const Card = ({
  title,
  description,
  buttonText,
  link,
}) => {
  return (
    <div className="card-container">
      {/* {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )} */}
      {title && <h1 className="card-title">{title}</h1>}
      {description && <p className="card-description">{description}</p>}
      {buttonText && link && (
        <a href={link} className="card-btn">
          {buttonText}
        </a>
      )}
    </div>
  );
};