import React from 'react';
import AdvertisedItems from './AdvertisedItems';
import Banner from './Banner';
import ProductCategories from './ProductCategories';


const Home = () => {
    return (
        <div className='mt-5 mb-10'>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;