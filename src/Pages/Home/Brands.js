import React from 'react';
import brand from '../../assets/images/brands.png'

const Brands = () => {
    return (
        <div className='text-center mt-24'>
            <p className='text-2xl font-bold uppercase mb-8 text-primary'>brands at simora</p>
            <img src={brand} alt="" className='w-full hover:bg-teal-100' />
        </div>
    );
};

export default Brands;