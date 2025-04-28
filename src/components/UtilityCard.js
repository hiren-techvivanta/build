import React from 'react';

const UtilityCard = ({ title, description, image, large, wide }) => {
  const cardClasses = `
    utility-card 
    ${large ? 'utility-card--large' : ''} 
    ${wide ? 'utility-card--wide' : ''}
  `;

  return (
    <div className={cardClasses}>
      <h3 className="utility-card__title">{title}</h3>
      <p className="utility-card__description">{description}</p>
      {image && (
        <div className="utility-card__image-container">
          <img 
            src={image} 
            alt={title} 
            className="utility-card__image" 
          />
        </div>
      )}
    </div>
  );
};

export default UtilityCard