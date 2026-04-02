import React, { useState } from 'react';
import './UsefulInfoPage.css';
import useful1Image from '../../assets/images/useful1.png';
import useful2Image from '../../assets/images/useful2.png';
import review3Image from '../../assets/images/useful3.png';

const categories = ['Все', 'Статьи', 'Рецепты'];

const infoItems = [
    {
        id: 1,
        type: 'Рецепты',
        title: 'Соус для пельменей с уксусом, рецепт с фото пошагово',
        date: '01 января 2026',
        image: useful1Image,
        actionLabel: 'Читать',
    },
    {
        id: 2,
        type: 'Статьи',
        title: 'Сегодня у нас открытие нового отдела в ТД «Сказка» ',
        date: '01 января 2026',
        image: useful2Image,
        actionLabel: 'Читать',
    },
    {
        id: 3,
        type: 'Статьи',
        title: 'Сегодня раздавали горячие, ароматные бауырсаки на площади',
        date: '01 января 2026',
        image: review3Image,
        actionLabel: 'Смотреть',
    },
];

const UsefulInfoPage = () => {
    const [activeCategory, setActiveCategory] = useState('Все');

    const filteredItems =
        activeCategory === 'Все'
            ? infoItems
            : infoItems.filter((item) => item.type === activeCategory);

    return (
        <section className="useful-info-page">
            <div className="useful-info-tabs" role="tablist" aria-label="Категории полезной информации">
                {categories.map((category, index) => (
                    <React.Fragment key={category}>
                        <button
                            type="button"
                            role="tab"
                            aria-selected={activeCategory === category}
                            className={`useful-info-tab ${activeCategory === category ? 'is-active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>

                        {index !== categories.length - 1 && <span className="useful-info-separator" aria-hidden="true" />}
                    </React.Fragment>
                ))}
            </div>

            <div className="useful-info-grid">
                {filteredItems.map((item) => {
                    const typeClass =
                        item.type === 'Статьи'
                            ? 'useful-info-badge is-article'
                            : 'useful-info-badge is-recipe';

                    return (
                        <article className="useful-card" key={item.id}>
                            <div className="useful-card-image">
                                <img src={item.image} alt={item.title} />
                            </div>

                            <div className="useful-card-body">
                                <span className={typeClass}>{item.type}</span>
                                <h3 className="useful-card-title">{item.title}</h3>
                                <p className="useful-card-date">{item.date}</p>

                                <button type="button" className="useful-card-button">
                                    {item.actionLabel}
                                </button>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default UsefulInfoPage;
