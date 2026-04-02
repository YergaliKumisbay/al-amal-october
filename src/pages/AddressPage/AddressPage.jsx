import React, { useState } from 'react';
import './AddressPage.css';

const branches = [
    {
        id: 1,
        shortLabel: 'Машхур Жусупа, 30а',
        address: 'Улица Машхур Жусупа, 30 А, Пн-Вс: с 08:00 до 20:00',
        telegram: '+7-747-630-97-58',
        whatsapp: '+7-747-630-97-58',
        email: 'info-example@bk.ru',
        instagram: '@amal.ekb',
        mapQuery: 'Машхур Жусупа 30А, Экибастуз',
    },
    {
        id: 2,
        shortLabel: 'Кеншілер, 18а',
        address: 'Улица Кеншілер, 18 А, Пн-Вс: с 08:00 до 20:00',
        telegram: '+7-747-630-97-58',
        whatsapp: '+7-747-630-97-58',
        email: 'info-example@bk.ru',
        instagram: '@amal.ekb',
        mapQuery: 'Кеншілер 18А, Экибастуз',
    },
    {
        id: 3,
        shortLabel: 'Ауэзова, 53в, 3 бутик',
        address: 'Улица Ауэзова, 53 В, 3 бутик, Пн-Вс: с 08:00 до 20:00',
        telegram: '+7-747-630-97-58',
        whatsapp: '+7-747-630-97-58',
        email: 'info-example@bk.ru',
        instagram: '@amal.ekb',
        mapQuery: 'Ауэзова 53В, Экибастуз',
    },
    {
        id: 4,
        shortLabel: 'Машхур Жусупа, 83а/1',
        address: 'Улица Машхур Жусупа, 83 А/1, Пн-Вс: с 08:00 до 20:00',
        telegram: '+7-747-630-97-58',
        whatsapp: '+7-747-630-97-58',
        email: 'info-example@bk.ru',
        instagram: '@amal.ekb',
        mapQuery: 'Машхур Жусупа 83А/1, Экибастуз',
    },
    {
        id: 5,
        shortLabel: 'Ауэзова, 149, 1 этаж',
        address: 'Улица Ауэзова, 149, 1 этаж, Пн-Вс: с 08:00 до 20:00',
        telegram: '+7-747-630-97-58',
        whatsapp: '+7-747-630-97-58',
        email: 'info-example@bk.ru',
        instagram: '@amal.ekb',
        mapQuery: 'Ауэзова 149, Экибастуз',
    },
    {
        id: 6,
        shortLabel: 'Машхур Жусупа, 78а',
        address: 'Улица Машхур Жусупа, 78 А, Пн-Вс: с 08:00 до 20:00',
        telegram: '+7-747-630-97-58',
        whatsapp: '+7-747-630-97-58',
        email: 'info-example@bk.ru',
        instagram: '@amal.ekb',
        mapQuery: 'Машхур Жусупа 78А, Экибастуз',
    },
];

const AddressPage = () => {
    const [activeBranchId, setActiveBranchId] = useState(branches[0].id);

    const activeBranch = branches.find((branch) => branch.id === activeBranchId) ?? branches[0];

    const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(activeBranch.mapQuery)}&z=16&output=embed`;

    return (
        <section className="address-page">
            <div className="address-layout">
                <aside className="branch-card">
                    <p className="address-card-title">Выберите филиал:</p>

                    <div className="branch-list">
                        {branches.map((branch) => (
                            <button
                                key={branch.id}
                                type="button"
                                className={`branch-item ${branch.id === activeBranchId ? 'is-active' : ''}`}
                                onClick={() => setActiveBranchId(branch.id)}
                            >
                                <span className="branch-index">{branch.id}.</span>
                                <span className="branch-name">{branch.shortLabel}</span>
                            </button>
                        ))}
                    </div>
                </aside>

                <div className="address-content">
                    <div className="address-top-cards">
                        <article className="info-card address-info-card">
                            <p className="address-card-title">Адрес:</p>
                            <p className="address-main-text">{activeBranch.address}</p>
                        </article>

                        <article className="info-card contact-card">
                            <p className="address-card-title">Telegram:</p>
                            <a href={`https://t.me/${activeBranch.telegram.replace(/[^\d]/g, '')}`} className="contact-text">
                                {activeBranch.telegram}
                            </a>

                            <p className="address-card-title contact-subtitle">WhatsApp:</p>
                            <a href={`https://wa.me/${activeBranch.whatsapp.replace(/[^\d]/g, '')}`} className="contact-text">
                                {activeBranch.whatsapp}
                            </a>
                        </article>

                        <article className="info-card contact-card">
                            <p className="address-card-title">Email:</p>
                            <a href={`mailto:${activeBranch.email}`} className="contact-text">
                                {activeBranch.email}
                            </a>

                            <p className="address-card-title contact-subtitle">Instagram:</p>
                            <a href="https://instagram.com/amal.ekb" className="contact-text" target="_blank" rel="noreferrer">
                                {activeBranch.instagram}
                            </a>
                        </article>
                    </div>

                    <div className="map-card">
                        <iframe
                            title={`Карта филиала ${activeBranch.shortLabel}`}
                            src={mapSrc}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddressPage;
