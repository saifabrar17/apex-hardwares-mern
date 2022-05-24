import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Reviews from './Reviews/Reviews';


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            {/* Extra 2 sections */}
        </div>
    );
};

export default HomePage;