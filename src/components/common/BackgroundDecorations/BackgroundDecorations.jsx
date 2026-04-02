import React from 'react';
import './BackgroundDecorations.css';
import decor1 from '../../../assets/decors/decor1.svg';
import decor2 from '../../../assets/decors/decor2.svg';

const decorations = [
    { image: decor1, type: 'primary', position: 'top-right' },
    // { image: decor2, type: 'secondary', position: 'mid-left' },
    // { image: decor1, type: 'primary', position: 'lower-right' },
    { image: decor2, type: 'secondary', position: 'bottom-left' },
];

const BackgroundDecorations = () => {
    return (
        <div className="bg-decorations" aria-hidden="true">
            {decorations.map((decor, index) => (
                <img
                    key={`${decor.position}-${index}`}
                    className={`bg-decorations__item bg-decorations__item--${decor.type} bg-decorations__item--${decor.position}`}
                    src={decor.image}
                    alt=""
                />
            ))}
        </div>
    );
};

export default BackgroundDecorations;
