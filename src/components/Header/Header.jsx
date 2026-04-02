import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import orbitImage from '../../assets/images/Group4.png';
import centerImage from '../../assets/images/centerImage.png';
import centerText from '../../assets/images/centerText.png';
import decorImage from '../../assets/images/Group1597879492.png';
import instagramIcon from '../../assets/images/instagram.png';
import whatsappIcon from '../../assets/images/whatsapp.png';

const Header = () => {
    return (
        <section className="header">
            <div className="header__bg-circle" aria-hidden="true" />

            <div className="header__content">
                <h1 className="header__title">Al-Amal: Настоящий Домашний Вкус</h1>
                <p className="header__subtitle">
                    Еда от Al-Amal, разнообразная, вкусная, халяльная, и сделанная с душой.
                </p>

                <Link className="header__cta" to="/catalog">
                    Каталог
                </Link>
            </div>

            <div className="header__visual" aria-hidden="true">
                <div className="header__orbit-wrap">
                    <img className="header__orbit" src={orbitImage} alt="" />
                    <img className="header__center-image" src={centerImage} alt="" />
                    <img className="header__center-text" src={centerText} alt="" />
                </div>

                <img className="header__decor-image" src={decorImage} alt="" />

                <div className="header__socials">
                    <a className="header__social-link" href="#" aria-label="Instagram">
                        <img src={instagramIcon} alt="" />
                    </a>
                    <a className="header__social-link" href="#" aria-label="WhatsApp">
                        <img src={whatsappIcon} alt="" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Header;
