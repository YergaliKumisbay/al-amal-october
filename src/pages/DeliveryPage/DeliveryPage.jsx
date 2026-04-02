import React from 'react';
import './DeliveryPage.css';
import deliveryImage from '../../assets/images/delivery.png';

const deliveryRows = [
    { label: 'Минимальный заказ:', value: '10 000 ₸' },
    { label: 'Бесплатная доставка:', value: 'от 15 000 ₸' },
    { label: 'Стоимость доставки:', value: '1 500 ₸' },
];

const DeliveryPage = () => {
    return (
        <section className="delivery-page">
            <div className="delivery-container">
                <div className="delivery-image">
                    <img src={deliveryImage} alt="Доставка" />
                </div>

                <div className="delivery-info">
                    <h1 className="delivery-title">Доставка</h1>

                    <div className="delivery-details">
                        {deliveryRows.map(({ label, value }) => (
                            <div className="delivery-row" key={label}>
                                <span className="delivery-label">{label}</span>
                                <span className="delivery-value">{value}</span>
                            </div>
                        ))}
                    </div>

                    <div className="delivery-phone">
                        <span className="phone-label">Телефон:</span>
                        <a href="tel:+77028155758" className="phone-number">
                            +7 (702) 815-57-58
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeliveryPage;
