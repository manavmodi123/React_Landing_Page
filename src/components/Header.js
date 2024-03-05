import React from 'react';
import './Header.css'; // Import your CSS file for styling

const Header = () => {
  return (
    <div className="header">
      <div className="search-bar">
      <button><i className="fas fa-search"></i></button> {/* Assuming you're using Font Awesome for the search icon */}
        <input type="text" />
      </div>
      <div className="titles">
        <div className="title">Categories</div>
        <div className="title">Website Builders</div>
        <div className="title">Today's Deals</div>
      </div>
    </div>
  );
}

export default Header;
