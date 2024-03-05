import React, { useState } from 'react';
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    const [showMore, setShowMore] = useState(false);
    const [showHighlights, setShowHighlights] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
        setShowHighlights(false); // Reset showHighlights when toggling showMore
    };

    const handleShowHighlights = () => {
        setShowHighlights(!showHighlights);
    };

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.imageText} />
                <p>{product.imageText}</p>
            </div>
            <div className="product-details">
                <p className='product-title'>{product.title} - <span>{product.description}</span></p>
                <h2 className='main_highlights'>Main highlights</h2>
                {!showMore &&      <p className='highlights'>[What You Get]: {product.highlights}</p>}
                <div className='main_highlights_div' style={{ display: showMore && !showHighlights ? 'block' : 'none' }}>
                    {product.mainHighlights.map((highlight) => (
                        <div key={highlight.id} className="highlight-item">
                            <p><span>{highlight.rating}</span>{highlight.highlight}</p>
                        </div>
                    ))}
                </div>
                {showMore && (
                    <div className='loved'>
                        <p>Why we love it</p>
                        <ul>
                            {product.loved.map((item, index) => (
                                <li key={index}>
                                    <input type="checkbox" checked={item.checked} readOnly />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <p className='show' onClick={handleShowMore}>
                    {showMore ? 'Show less' : 'Show more'}{showMore ? <i className="fas fa-solid fa-chevron-up"></i> : <i className="fas fa-solid fa-chevron-down"></i>}
                </p>
            </div>
            <div className="product-rating">
                <div className="rating-card">
                    <p className='rating'>{product.rating}</p>
                    <p className='rating_text'>{product.ratingText}</p>
                    <div className="rating-stars">
                        {[...Array(product.ratingStars)].map((_, index) => (
                            <i key={index} className="fas fa-star"></i>
                        ))}
                    </div>
                </div>
                <button className="view-button">View</button> {/* Add a view button */}
            </div>
        </div>
    );
}

export default ProductCard;
