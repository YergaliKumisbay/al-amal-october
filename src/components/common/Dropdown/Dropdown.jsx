import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // добавляем импорт Link
import './Dropdown.css';

const Dropdown = ({ items, isOpen, onClose }) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    const handleItemClick = () => {
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="dropdown" ref={dropdownRef}>
            <ul className="dropdown__list">
                {items.map((item, index) => (
                    <li key={index} className="dropdown__item">
                        <Link
                            to={item.link || '#'}
                            className="dropdown__title"
                            onClick={handleItemClick}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
