import React from 'react';
import { FaGasPump } from 'react-icons/fa';
import { PhotoView } from 'react-photo-view';

const AdvertisedItem = ({ item, setAdvertiseItem }) => {
    const { name, image, resale, year, type, milage, saleStatus } = item;

    if (saleStatus === 'Available') {

        return (
            <div className="border flex flex-col rounded-lg text-primary shadow-lg mb-8 mt-8 hover:bg-primary hover:text-white">
                <PhotoView src={image}>
                    <figure><img src={image} alt="Cars" style={{ height: 250, borderRadius: 30 }} className='p-4' /></figure>
                </PhotoView>
                <div className='px-3'>
                    <div className="h-[20px] font-bold text-start">{name}</div>
                    <div className='flex items-center pt-8'>
                        <FaGasPump className='mr-2'></FaGasPump>
                        {type}
                    </div>
                    <div className='flex font-semibold text-sm pt-2'>
                        {year}
                        <div className="divider divider-horizontal"></div>
                        {milage} km
                    </div>
                    <div className='flex flex-col pt-2'>
                        <p className='text-start font-bold animate-pulse'>For Sale: ${resale}</p>
                    </div>
                    <div className="card-actions justify-start py-3">
                        <label
                            htmlFor='bookModal'
                            className="btn btn-outline btn-success"
                            onClick={() => setAdvertiseItem(item)}
                        >
                            Book Now
                        </label>
                    </div>
                </div>
            </div>
        );
    }
};

export default AdvertisedItem;