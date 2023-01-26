import React from 'react';
import { FaHandshake } from "react-icons/fa";

const Financing = () => {
    return (

        <div className='text-center'>
            <div className="flex flex-col w-full border-opacity-50 mt-8">
                <div className="grid h-20 card rounded-box place-items-center text-2xl font-bold text-primary">Financing</div>
                <div className="divider text-7xl text-secondary"><FaHandshake></FaHandshake></div>
                <div className="grid h-20 place-items-center font-semibold mb-8 hover:bg-primary hover:text-white hover:m-3">We work with the main financial entities in the market and have a team of Business Managers, specialists in the field of Financing, able to find the best solution for your needs, quickly and without bureaucracy. We have financing solutions for up to 120 months and up to 100% of the vehicle's value, for new and used vehicles and also for all campaigns made available by the brands.
                </div>
            </div>
            <button className='btn btn-success btn-outline uppercase mt-32 md:mt-8'>Discover our solutions</button>
        </div>

    );
};

export default Financing;