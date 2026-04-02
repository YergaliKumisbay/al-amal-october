import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/logo.png';
import rightimage from '../../assets/icons/footer-text.png';

const Footer = () => {
    const categories = [
        { label: 'Манты', path: '/catalog/manty' },
        { label: 'Пельмени и вареники', path: '/catalog/pelmeni' },
        { label: 'Хинкали', path: '/catalog/hinkali' },
        { label: 'Перец фаршированный', path: '/catalog/pepper' },
        { label: 'Котлеты', path: '/catalog/cutlets' },
        { label: 'Тесто', path: '/catalog/dough' },
        { label: 'Самса', path: '/catalog/samsa' },
        { label: 'Борек', path: '/catalog/borek' },
        { label: 'Печенье/Блины', path: '/catalog/pancakes' },
        { label: 'Пироги', path: '/catalog/pies' },
        { label: 'Готовая выпечка', path: '/catalog/pastry' }
    ];

    const navLinks = [
        { label: 'О нас', path: '/about' },
        { label: 'Полезная информация', path: '/info' },
        { label: 'Доставка', path: '/delivery' }
    ];

    const addresses = [
        'Мы в Экибастузе',
        'Мы в Алматы'
    ];

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__logo">
                    <img src={logo} alt="Al-Amal" />
                </div>

                <div className="footer__column footer__column--catalog">
                    <h3 className="footer__title">Каталог</h3>
                    <div className="footer__catalog-grid">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="footer__catalog-item">
                                <Link to={cat.path}>{cat.label}</Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="footer__column">
                    <h3 className="footer__title">Навигация</h3>
                    <ul className="footer__list">
                        {navLinks.map((link, idx) => (
                            <li key={idx} className="footer__item">
                                <Link to={link.path}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer__column">
                    <h3 className="footer__title">Адреса и филиалы</h3>
                    <ul className="footer__list">
                        {addresses.map((addr, idx) => (
                            <li key={idx} className="footer__item">
                                {addr}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer__copyright">
                    <span>AL-Amal, 2026</span>
                </div>

                <div className="footer__visual">
                    <img className="footer__right-text" src={rightimage} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
