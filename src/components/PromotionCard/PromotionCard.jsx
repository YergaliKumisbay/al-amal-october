import React from 'react';
import './PromotionCard.css';

const PromotionCard = ({ image, title, description, buttonText, onButtonClick }) => {
    return (
        <div className="promotion-card">
            <img src={image} alt={title} className="promotion-card__image" />
            <div className="promotion-card__content">
                <h3 className="promotion-card__title">{title}</h3>
                <p className="promotion-card__description">{description}</p>
                <button className="promotion-card__button" onClick={onButtonClick}>
                    {buttonText || 'Подробнее'}
                </button>
            </div>
        </div>
    );
};

export default PromotionCard;
