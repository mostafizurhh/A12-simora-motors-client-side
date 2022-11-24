import React from 'react';
import { FaCarAlt, FaHandshake, FaMapMarkerAlt } from 'react-icons/fa';

const Info = () => {
    return (
        <div className='md:flex justify-between items-center mt-8 mb-8 animate-pulse'>
            <div className='flex items-center'>
                <FaCarAlt className='text-2xl font-bold text-primary'></FaCarAlt>
                <h5 className='md:text-xl font-semibold ml-3 italic capitalize text-black'>Semi-new and used cars with warranty</h5>
            </div>

            <div className='flex items-center'>
                <FaHandshake className='text-2xl font-bold text-primary'></FaHandshake>
                <h5 className='md:text-xl font-semibold ml-3 italic capitalize text-black'>Possibility of financing</h5>
            </div>
            <div className='flex items-center'>
                <FaMapMarkerAlt className='text-2xl font-bold text-primary'></FaMapMarkerAlt>
                <h5 className='md:text-xl font-semibold ml-3 italic capitalize text-black'>Deliver Throughout the Country</h5>
            </div>
        </div>
    );
};

export default Info;