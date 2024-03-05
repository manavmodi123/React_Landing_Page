    import React from 'react';
    import './SecondHeader.css'; // Import your CSS file for styling

    const SecondHeader = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <div className="second-header">
        <p>Best Website Builders in the US</p>
        <div className="update-info">
            <div className='check-mark'>
            <i className="fas fa-check-circle"></i> {/* Assuming you're using Font Awesome for the checkmark icon */}
            <span>Last updated - {formattedDate}</span>
            </div>
            <div className='advertising'>
            <div className="advertising-icon">
                <i className="fas fa-info"></i>
            </div>
            <span>Advertising Disclosure</span>
            <div className='relevant'>
            <span>Top Relevant</span>
            <i className="fas fa-solid fa-chevron-down"></i>
            </div>
            </div>
        </div>
        <div className='titles'>
            <ul>
                <li>Tools</li>
                <li>AWS Builder</li>
                <li>Start Build</li>
                <li>Build Supplies</li>
                <li>Tooling</li>
                <li>BlueHosting</li>
            </ul>
        </div>
        <div className='product-category'>
  <ul>
    <li>Home <i className="fas fa-chevron-right"></i></li>
    <li>Hosting for all <i className="fas fa-chevron-right"></i></li>
    <li>Hosting <i className="fas fa-chevron-right"></i></li>
    <li>Hosting6 <i className="fas fa-chevron-right"></i></li>
    <li>Hosting5 </li>
  </ul>
</div>

        </div>
    );
    }

    export default SecondHeader;
