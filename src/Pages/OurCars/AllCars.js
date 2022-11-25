import React from 'react';
import { FaGasPump } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllCars = ({ allcars }) => {
    const { _id, name, image, resale, original, year, month, type, milage, seller, location, posted } = allcars;

    return (
        <div className="card md:card-side p-2 bg-base-100 border shadow-xl mb-8 mt-8 ">
            <figure><img src={image} alt="cars" style={{ height: 300, width: 450 }} className='p-6' /></figure>
            <div className='flex-grow-1'>
                <div className="card-body">
                    <div className="card-title">{name}</div>
                    <div className='flex items-center'>
                        <FaGasPump></FaGasPump>
                        <p className='ml-2'>{type}</p>
                    </div>
                    <div className='flex text-sm'>
                        <p>{month}</p>
                        <p className='font-bold'>.</p>
                        <p>{year}</p>
                        <p className='font-bold'>.</p>
                        <p>{milage} km</p>
                    </div>
                    <div className='flex text-sm'>
                        <p>{location}</p>
                        <p className='font-bold'>.</p>
                        <p>{posted}</p>
                    </div>
                    <div>
                        <p>{seller}</p>
                    </div>
                </div>
                <div className='card-body flex-row pt-0'>
                    <p className='text-primary font-bold'>Sale: ${resale}</p>
                    <p className='text-secondary'>Original: ${original}</p>
                </div>
                <div className="card-body pt-0">
                    <Link to={`/products/${_id}`}>
                        <button className="btn btn-primary hover:bg-secondary text-white">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllCars;