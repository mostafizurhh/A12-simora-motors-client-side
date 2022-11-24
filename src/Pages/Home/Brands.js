import React from 'react';
import brand from '../../assets/images/brands.png'

const Brands = () => {
    return (
        <div className='text-center'>
            <p className='text-2xl font-bold uppercase mb-8 text-primary'>brands at simora</p>
            <img src={brand} alt="" className='w-full' />
        </div>
    );
};

export default Brands;