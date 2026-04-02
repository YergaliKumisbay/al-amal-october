import React from 'react';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import './Card.css';

const Card = ({ image, title, composition, price }) => {
    const [quantity, setQuantity] = React.useState(1);

    const handleOrder = () => {
        // Логика заказы (редукстің немесе контексттің функциясы)
        console.log(`Заказано: ${title}, количество: ${quantity}`);
    };

    return (
        <div className="card">
            <img src={image} alt={title} className="card__image" />
            <div className="card__hart">
                <h3 className="card__title">{title}</h3>
                <p className="card__composition">{composition}</p>
                <span className="card__price">{price} ₸</span>
                <div className="card__footer">
                    <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                    <button className="card__order-btn" onClick={handleOrder}>
                        Заказать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
