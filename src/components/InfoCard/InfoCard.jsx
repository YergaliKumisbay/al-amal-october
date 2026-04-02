import React from 'react';
import './InfoCard.css';

const InfoCard = ({ image, type, title, date, onReadMore }) => {
    const typeClass = type === 'Статьи' ? 'info-card__type--articles' : 'info-card__type--recipes';

    return (
        <div className="info-card">
            <div className="info-card__image">
                <img src={image} alt={title} />
            </div>
            <div className="info-card__content">
                <span className={`info-card__type ${typeClass}`}>{type}</span>
                <h3 className="info-card__title">{title}</h3>
                <span className="info-card__date">{date}</span>
                <div className="info-card__footer">
                    <button className="info-card__button" onClick={onReadMore}>
                        Читать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
