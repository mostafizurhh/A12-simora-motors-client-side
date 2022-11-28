import React from 'react';
import { FaGasPump } from 'react-icons/fa';
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const CategoryProduct = ({ product, setReportedItem, setAvailableProduct, booking }) => {
    // console.log(product)
    const { name, image, resale, original, year, month, type, milage, seller, location, posted } = product;


    return (
        <div className="card lg:card-side bg-base-100 border shadow-xl mb-8 mt-8 ">
            <PhotoView src={image}>
                <figure><img src={image} alt="cars" className='h-full' /></figure>
            </PhotoView>
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
                    <p className='text-primary font-extrabold'>Sale: ${resale}</p>
                    <p className='text-secondary'>Original: ${original}</p>
                </div>
                <div className="card-body py-2">

                    <label
                        htmlFor="booking-modal" className="btn btn-primary hover:bg-secondary text-white"
                        onClick={() => setAvailableProduct(product)}
                    >
                        Book Now
                    </label>
                    <label
                        htmlFor="report-modal" className="btn btn-primary hover:bg-secondary text-white"
                        onClick={() => setReportedItem(product)}
                    >
                        Report Now
                    </label>

                </div>
            </div>
        </div>
    );



};

export default CategoryProduct;