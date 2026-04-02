import React from 'react';
import Card from '../common/Card/Card';
import { mantyItems } from '../../data/menuData';
import './MenuSection.css';

const MantySection = () => {
    return (
        <section className="menu-section">
            <h2 className="section-title">Манты</h2>
            <div className="cards-grid">
                {mantyItems.map(item => (
                    <Card
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        composition={item.composition}
                        price={item.price}
                    />
                ))}
            </div>
        </section>
    );
};

export default MantySection;
