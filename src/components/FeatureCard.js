import React from 'react';

const FeatureCard = ({ title, description, ctaText, image }) => {
  return (
    <div className="feature-card">
      <div className="feature-card__content">
        <h2 className="feature-card__title">{title}</h2>
        <p className="feature-card__description">{description}</p>
        {ctaText && (
          <button className="feature-card__cta">{ctaText}</button>
        )}
      </div>
      {image && (
        <div className="feature-card__image-container">
          <img 
            src={`/images/${image}`} 
            alt={title} 
            className="feature-card__image" 
          />
        </div>
      )}
    </div>
  );
};

export default FeatureCard;