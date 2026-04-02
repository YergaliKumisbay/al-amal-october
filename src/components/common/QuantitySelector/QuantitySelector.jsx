import React from 'react';
import './QuantitySelector.css';
import MinusIcon from '../../../assets/icons/minus.svg';
import PlusIcon from '../../../assets/icons/plus.svg';

const QuantitySelector = ({ quantity, setQuantity, min = 1 }) => {
    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => (prev > min ? prev - 1 : min));

    return (
        <div className="quantity-selector">
            <button onClick={decrement} className="qty-btn">
                <img src={MinusIcon} alt="minus" className="minus-icon" />
            </button>
            <span className="qty-value">{quantity}</span>
            <button onClick={increment} className="qty-btn">
                <img src={PlusIcon} alt="plus" className="plus-icon" />
            </button>
        </div>
    );
};

export default QuantitySelector;
