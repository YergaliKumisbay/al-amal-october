import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';
import ellipseIcon from '../../assets/icons/ellipse.svg';
import { categories } from '../../data/menuData';

const routeNames = {
    '/': 'Главная',
    '/catalog': 'Каталог',
    '/about': 'О нас',
    '/promotions': 'Акции',
    '/reviews': 'Отзывы',
    '/info': 'Полезная информация',
    '/delivery': 'Доставка',
    '/address': 'Адреса и филиалы',
};

const getCategoryName = (categoryKey) => {
    if (categories[categoryKey]) {
        return categories[categoryKey].title;
    }
    return categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);
};

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    // Если главная страница – ничего не показываем
    if (pathnames.length === 0) return null;

    // Строим список элементов для отображения: сначала "Главная", затем каждый сегмент пути
    const crumbs = [
        { path: '/', name: 'Главная', isLink: true }
    ];

    let currentPath = '';
    for (let i = 0; i < pathnames.length; i++) {
        const segment = pathnames[i];
        currentPath += `/${segment}`;
        let name;

        if (segment === 'catalog' && i === 0) {
            name = routeNames['/catalog'];
        } else if (segment === 'about') {
            name = routeNames['/about'];
        } else if (segment === 'promotions') {
            name = routeNames['/promotions'];
        } else if (segment === 'reviews') {
            name = routeNames['/reviews'];
        } else if (segment === 'info') {
            name = routeNames['/info'];
        } else if (segment === 'delivery') {
            name = routeNames['/delivery'];
        } else if (segment === 'address') {
            name = routeNames['/address'];
        } else if (i === 1 && pathnames[0] === 'catalog') {
            name = getCategoryName(segment);
        } else {
            name = segment.charAt(0).toUpperCase() + segment.slice(1);
        }

        const isLast = i === pathnames.length - 1;
        crumbs.push({
            path: currentPath,
            name: name,
            isLink: !isLast
        });
    }

    // Рендерим элементы, вставляя разделитель между ними
    const breadcrumbs = [];
    for (let i = 0; i < crumbs.length; i++) {
        const crumb = crumbs[i];
        if (crumb.isLink) {
            breadcrumbs.push(
                <Link key={`link-${i}`} to={crumb.path} className="breadcrumb-link">
                    {crumb.name}
                </Link>
            );
        } else {
            breadcrumbs.push(
                <span key={`current-${i}`} className="breadcrumb-current">
                    {crumb.name}
                </span>
            );
        }
        // Добавляем разделитель после каждого элемента, кроме последнего
        if (i < crumbs.length - 1) {
            breadcrumbs.push(
                <span key={`separator-${i}`} className="breadcrumb-separator">
                    <img src={ellipseIcon} alt="ellipse" />
                </span>
            );
        }
    }

    return <div className="breadcrumbs">{breadcrumbs}</div>;
};

export default Breadcrumbs;
