import React from 'react';
import './AboutPage.css';
import image1 from '../../assets/images/about1.png';
import image2 from '../../assets/images/about2.png';
import image3 from '../../assets/images/about3.png';
import image4 from '../../assets/images/about4.png';
import rectangleIcon from '../../assets/icons/rectangle.svg';

const AboutPage = () => {
    return (
        <div className="about-company-page">
            {/* Блок «О компании» */}
            <div className="about-company-container">
                <img src={image1} alt="О компании" className="about-image" />
                <div className="about-text">
                    <h2>О компании</h2>
                    <p>
                        AL-Amal - современный цех по производству замороженных полуфабрикатов и готовой выпечки в Астане. Мы создаем продукцию, которая сохраняет вкус домашней еды и экономит ваше время.
                        Мы уделяем особое внимание контролю качества на каждом этапе производства. Все сырье проходит тщательную проверку перед использованием.
                        Наше производство соответствует всем санитарным нормам и требованиям безопасности пищевой продукции.
                        Готовая продукция проходит финальную проверку перед упаковкой, что гарантирует неизменно высокое качество.
                        Мы регулярно проводим внутренние аудиты и работаем над улучшением технологических процессов.
                    </p>
                </div>
            </div>

            {/* Блок «Наше производство» */}
            <div className="about-company-container production">
                <h2>Наше производство</h2>
                <div className="production-gallery">
                    <img src={image2} alt="Производство 2" />
                    <img src={image3} alt="Производство 3" />
                    <img src={image4} alt="Производство 4" />
                </div>
                <div className="production-rectangle">
                    <img src={rectangleIcon} alt="rectangle" />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
