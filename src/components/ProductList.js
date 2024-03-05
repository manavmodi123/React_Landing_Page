import React from 'react';
import ProductCard from './ProductCard';
import product from "../images/product.jpeg";

const ProductList = () => {
  const productList = [
    {
      id: 1,
      image: product,
      imageText: "Builder 1",
      title: "WixPro 72-Inch Responsive Website Builder ",
      description: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      highlights: "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: 9.8,
      ratingText: "Exceptional",
      ratingStars: 5,
      mainHighlights: [
        { id: 1, rating: 9.9, highlight: "Building Responsive" },
        { id: 2, rating: 8.9, highlight: "Cool" },
        { id: 3, rating: 8.9, highlight: "Docs" }
      ],
  loved: ["Documentation", "Easy Use", "Out of Box"]
    },
    {
      id: 2,
      image: product,
      imageText: "Builder ",
      title: "SiteCraft 68-Inch Ultimate Web Design Studio",
      description: " Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      highlights: "Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      rating: 9.5,
      ratingText: "Exceptional",
      ratingStars: 4,
      mainHighlights: [
        { id: 1, rating: 9.9, highlight: "Building Responsive" },
        { id: 2, rating: 8.9, highlight: "Cool" },
        { id: 3, rating: 8.9, highlight: "Docs" }
      ],
  loved: ["Documentation", "Easy Use", "Out of Box"]
    },

    {
      id: 3,
      image: product,
      imageText: "Builder 1",
      title: "WixPro 72-Inch Responsive Website Builder ",
      description: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      highlights: "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: 9.8,
      ratingText: "Exceptional",
      ratingStars: 3,
      mainHighlights: [
        { id: 1, rating: 9.9, highlight: "Building Responsive" },
        { id: 2, rating: 8.9, highlight: "Cool" },
        { id: 3, rating: 8.9, highlight: "Docs" }
      ],
  loved: ["Documentation", "Easy Use", "Out of Box"]
    },
    {
      id: 4,
      image: product,
      imageText: "CDK",
      title: "WixPro 72-Inch Responsive Website Builder ",
      description: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      highlights: "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: 9.8,
      ratingText: "Exceptional",
      ratingStars: 3,
      mainHighlights: [
        { id: 1, rating: 9.9, highlight: "Building Responsive" },
        { id: 2, rating: 8.9, highlight: "Cool" },
        { id: 3, rating: 8.9, highlight: "Docs" }
      ],
      loved: ["Documentation", "Easy Use", "Out of Box"]
    },
    
   
  ];

  return (
    <div className="product-list">
      {productList.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
