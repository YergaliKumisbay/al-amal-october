import React from 'react';
import './Pagination.css';
import leftIcon from '../../../assets/icons/left.svg';
import rightIcon from '../../../assets/icons/right.svg';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const generatePages = () => {
        const pages = [];
        const delta = 2;
        const leftBound = Math.max(1, currentPage - delta);
        const rightBound = Math.min(totalPages, currentPage + delta);

        pages.push(1);

        if (leftBound > 2) pages.push('...');

        for (let i = Math.max(2, leftBound); i <= Math.min(totalPages - 1, rightBound); i++) {
            if (!pages.includes(i)) pages.push(i);
        }

        if (rightBound < totalPages - 1) pages.push('...');

        if (totalPages > 1 && !pages.includes(totalPages)) pages.push(totalPages);

        return pages;
    };

    const pages = generatePages();

    return (
        <div className="pagination">
            <button
                className="pagination__arrow"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <img src={leftIcon} alt="Previous" />
            </button>
            {pages.map((page, index) => (
                <React.Fragment key={index}>
                    {page === '...' ? (
                        <span className="pagination__dots">...</span>
                    ) : (
                        <button
                            className={`pagination__page ${page === currentPage ? 'pagination__page--active' : ''}`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    )}
                </React.Fragment>
            ))}
            <button
                className="pagination__arrow"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <img src={rightIcon} alt="Next" />
            </button>
        </div>
    );
};

export default Pagination;
