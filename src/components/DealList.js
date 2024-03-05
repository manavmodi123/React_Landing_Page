import React from 'react'
import "./DealList.css";
import DealCard from './DealCard';
import productImg from "../images/product.jpeg";


const DealList = () => {

    const productList = [
        {
            id: 1,
            image: productImg,
            title: "Webbuilder 1",
            description: "Computer  Modern clasic with wix support",
            price: 49.96,
            discount: 20,
            discountedPrice: 39.96,
            offer: true
        },
        {
            id: 2,
            image: productImg,
            title: "Webbuilder 1",
            description: "Computer  Modern clasic with wix support",
            price: 49.96,
            discount: 20,
            discountedPrice: 39.96,
            offer: true
        },
        {
            id: 3,
            image: productImg,
            title: "Webbuilder 1",
            description: "Computer  Modern clasic with wix support",
            price: 49.96,
            discount: 20,
            discountedPrice: 39.96,
            offer: true
        },
    ];
    
  return (
    <div className='deal-container'>
        <h2>Related deals you might like for</h2>
        <div className='deal-list'>
            {productList.map((product) => (
                <DealCard  key={product.id} product={product}/>
            ))}
        </div>
      
    </div>
  )
}

export default DealList
