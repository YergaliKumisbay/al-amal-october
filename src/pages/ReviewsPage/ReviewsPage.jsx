import React, { useState } from 'react';
import './ReviewsPage.css';
import Pagination from '../../components/common/Pagination/Pagination.jsx';

import reviewImage1 from '../../assets/images/review1.png';
import reviewImage2 from '../../assets/images/review2.png';
import reviewImage3 from '../../assets/images/review3.png';
import reviewImage4 from '../../assets/images/review4.png';
import reviewImage5 from '../../assets/images/review5.png';
import reviewImage6 from '../../assets/images/review6.png';
import reviewImage7 from '../../assets/images/review7.png';
import reviewImage8 from '../../assets/images/review8.png';
import reviewImage9 from '../../assets/images/review9.png';
import reviewImage10 from '../../assets/images/review10.png';
import reviewImage11 from '../../assets/images/review11.png';
import reviewImage12 from '../../assets/images/review12.png';

const reviews = [
    reviewImage1, reviewImage2, reviewImage3, reviewImage4,
    reviewImage5, reviewImage6, reviewImage7, reviewImage8,
    reviewImage9, reviewImage10, reviewImage11, reviewImage12,
];

const ITEMS_PER_PAGE = 8;

const ReviewsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentReviews = reviews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="reviews-page">
            <h2 className="reviews-page__title">Отзывы</h2>
            <div className="reviews-grid">
                {currentReviews.map((img, idx) => (
                    <div key={idx} className="review-card">
                        <img src={img} alt={`Отзыв ${startIndex + idx + 1}`} />
                    </div>
                ))}
            </div>
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
};

export default ReviewsPage;
