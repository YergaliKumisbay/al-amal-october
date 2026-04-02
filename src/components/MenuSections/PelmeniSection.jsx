import React from 'react';
import Card from '../common/Card/Card';
import { pelmeniItems } from '../../data/menuData';
import './MenuSection.css';

const PelmenSection = () => {
    return (
        <section className="menu-section">
            <h2 className="section-title">Пельмени и вареники</h2>
            <div className="cards-grid">
                {pelmeniItems.map(item => (
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

export default PelmenSection;
