import React from 'react';
import "./DealList.css";

const DealCard = ({ product }) => {
    return (
        <div className='deal-card'>
            <img src={product.image} alt={product.title} />
            <div className="deal-details">
                <div className='tag'>
                    <p>{product.discount}%</p>
                    <p>Limited time</p>
                </div>
                <div className='deal-info'>
                <h4>{product.title}</h4>
                <p>{product.description}</p> 
                </div>
                <div className="price-info">
                    <p className="discounted-price">${product.discountedPrice}</p>
                    <p className="original-price">${product.price}</p>
                    <span>({product.discount}% Off)</span>
                </div> 
                <button className='viewbutton'>View Deal</button>

            </div>
        </div>
    );
}

export default DealCard;
