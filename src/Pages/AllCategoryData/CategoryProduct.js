import React from 'react';
import { FaGasPump } from 'react-icons/fa';
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const CategoryProduct = ({ product, setReportedItem, setAvailableProduct, booking }) => {
    // console.log(product)
    const { name, image, resale, original, year, month, type, milage, seller, location, posted } = product;


    return (
        <div className="card border text-primary shadow-xl mb-8 mt-8 hover:bg-primary hover:text-white">
            <PhotoView src={image}>
                <figure><img src={image} alt="cars" className='h-[500px] w-full transition ease-in-out hover:-translate-y-1 hover:scale-90 hover:rounded-xl' /></figure>
            </PhotoView>

            <div className="card-body">
                <div className='flex justify-between'>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <div className='flex items-center'>
                            <FaGasPump></FaGasPump>
                            <p className='ml-2'>{type}</p>
                        </div>
                        <p>{month} {year}, {milage} km</p>
                        <p>{seller}</p>
                        <p>{location}</p>
                        <p><strong>Posted:</strong> {posted}</p>
                    </div>
                    <div>
                        <p className='font-extrabold animate-bounce'>Sale: ${resale}</p>
                        <p >Original: ${original}</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <label
                        htmlFor="booking-modal" className="btn btn-success btn-outline"
                        onClick={() => setAvailableProduct(product)}
                    >
                        Book Now
                    </label>
                    <label
                        htmlFor="report-modal" className="btn btn-success btn-outline"
                        onClick={() => setReportedItem(product)}
                    >
                        Report To Admin
                    </label>
                </div>
            </div>
        </div>
    );



};

export default CategoryProduct;