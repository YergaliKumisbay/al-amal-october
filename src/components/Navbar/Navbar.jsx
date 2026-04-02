import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import locationIcon from '../../assets/icons/location.svg';
import poligonIcon from '../../assets/icons/poligon.svg';
import ellipseIcon from '../../assets/icons/ellipse.svg';
import Dropdown from '../common/Dropdown/Dropdown';

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const [isCatalogOpen, setIsCatalogOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const catalogRef = useRef(null);
    const aboutRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (catalogRef.current && !catalogRef.current.contains(event.target)) {
                setIsCatalogOpen(false);
            }
            if (aboutRef.current && !aboutRef.current.contains(event.target)) {
                setIsAboutOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const catalogItems = [
        { label: 'Манты', link: '/catalog/manty' },
        { label: 'Пельмени и вареники', link: '/catalog/pelmeni' },
        { label: 'Хинкали', link: '/catalog/hinkali' },
        { label: 'Перец фаршированный', link: '/catalog/pepper' },
        { label: 'Котлеты', link: '/catalog/cutlets' },
        { label: 'Тесто', link: '/catalog/dough' },
        { label: 'Самса, сосиски в тесте', link: '/catalog/samsa' },
        { label: 'Борек', link: '/catalog/borek' },
        { label: 'Печенье/Блины', link: '/catalog/pancakes' },
        { label: 'Пироги', link: '/catalog/pies' },
        { label: 'Готовая выпечка (штучно)', link: '/catalog/pastry' },
    ];

    const aboutItems = [
        { label: 'О компании', link: '/about' },
        { label: 'Акции', link: '/promotions' },
        { label: 'Отзывы', link: '/reviews' },
    ];

    return (
        <nav className={`navbar${isHomePage ? ' navbar--home' : ''}`}>
            <div className="navbar__container">
                <Link className="navbar__logo" to="/">
                    <img src={logo} alt="Al-Amal" />
                </Link>

                <ul className="navbar__menu">
                    <li ref={catalogRef} className="navbar__menu-item navbar__menu-item--dropdown">
                        <button
                            type="button"
                            className="navbar__menu-button"
                            onClick={() => setIsCatalogOpen((value) => !value)}
                        >
                            Каталог
                            <img src={poligonIcon} alt="" aria-hidden="true" />
                        </button>
                        <Dropdown items={catalogItems} isOpen={isCatalogOpen} onClose={() => setIsCatalogOpen(false)} />
                    </li>

                    <li ref={aboutRef} className="navbar__menu-item navbar__menu-item--dropdown">
                        <button
                            type="button"
                            className="navbar__menu-button"
                            onClick={() => setIsAboutOpen((value) => !value)}
                        >
                            О нас
                            <img src={poligonIcon} alt="" aria-hidden="true" />
                        </button>
                        <Dropdown items={aboutItems} isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
                    </li>

                    <li className="navbar__menu-item">
                        <Link to="/info">Полезная информация</Link>
                    </li>
                    <li className="navbar__menu-item">
                        <Link to="/delivery">Доставка</Link>
                    </li>
                </ul>

                <div className="navbar__actions">
                    <button type="button" className="navbar__lang">
                        Ру
                        <img src={poligonIcon} alt="" aria-hidden="true" />
                    </button>

                    <div className="navbar__addresses">
                        <Link className="navbar__addresses-head" to="/address">
                            <img src={locationIcon} alt="" aria-hidden="true" />
                            <span>Адреса и филиалы</span>
                        </Link>

                        <div className="navbar__addresses-list">
                            <Link to="/address">Мы в Экибастузе</Link>
                            <img src={ellipseIcon} alt="" aria-hidden="true" />
                            <Link to="/address">Мы в Алматы</Link>
                            <img src={ellipseIcon} alt="" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
