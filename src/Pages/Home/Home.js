import React from 'react';
import AdvertisedItems from './AdvertisedItems';
import Banner from './Banner';
import Brands from './Brands';
import Financing from './Financing';
import Info from './Info';
import ProductCategories from './ProductCategories';


const Home = () => {
    return (
        <div className='mt-5 mb-10'>
            <Info></Info>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <ProductCategories></ProductCategories>
            <Brands></Brands>
            <Financing></Financing>
        </div>
    );
};

export default Home;