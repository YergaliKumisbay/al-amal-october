import React from 'react';
import PromotionCard from '../../components/PromotionCard/PromotionCard';
import './PromotionsPage.css';

const promotions = [
    {
        id: 1,
        image: '/src/assets/images/promotions1.png',
        title: 'Здесь будет кратко название и условие акции, кнопка будет переводить в Инстаграм',
        description: 'результаты 01 января 2026',
        buttonText: 'Читать',
    },
    {
        id: 2,
        image: '/src/assets/images/promotions2.png',
        title: 'Здесь будет кратко название и условие акции, кнопка будет переводить в Инстаграм',
        description: 'результаты 01 января 2026',
        buttonText: 'Читать',
    },
];

const PromotionsPage = () => {
    return (
        <div className="promotions-page">
            <h1 className="promotions-page__title">Акции</h1>
            <div className="promotions-grid">
                {promotions.map(promo => (
                    <PromotionCard
                        key={promo.id}
                        image={promo.image}
                        title={promo.title}
                        description={promo.description}
                        buttonText={promo.buttonText}
                        onButtonClick={() => console.log(`Нажата кнопка для акции: ${promo.title}`)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PromotionsPage;
