import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/common/Card/Card';
import { categories } from '../../data/menuData';
import './CategoryPage.css';

const CategoryPage = () => {
    const { category } = useParams(); // получаем manty, pelmeni, etc.
    const categoryData = categories[category];

    if (!categoryData) {
        return <div className="error">Категория не найдена</div>;
    }

    return (
        <div className="category-page">
            <div className="category-page__container">
                <h1 className="category-page__title">{categoryData.title}</h1>
                <div className="category-page__grid">
                    {categoryData.items.length > 0 ? (
                        categoryData.items.map(item => (
                            <Card
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                composition={item.composition}
                                price={item.price}
                            />
                        ))
                    ) : (
                        <p className="category-page__empty">Товары в этой категории скоро появятся</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
