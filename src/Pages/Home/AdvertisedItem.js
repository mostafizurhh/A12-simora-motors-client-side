import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaGasPump, FaRegCheckCircle } from 'react-icons/fa';
import { PhotoView } from 'react-photo-view';

const AdvertisedItem = ({ item, setAdvertiseItem }) => {
    const { name, image, resale, original, year, month, type, milage, seller, location, phone, email, photoURL, saleStatus } = item;

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users/')
            .then(res => res.json())
    })

    if (saleStatus === 'Available') {

        return (
            <div className="card bg-base-100 border shadow-xl mb-8 mt-8">
                <PhotoView src={image}>
                    <figure><img src={image} alt="cars" className='w-full p-4' style={{ height: 250, borderRadius: 30 }} /></figure>
                </PhotoView>

                <div className="card-body pt-4">
                    <div className="card-title">{name}</div>
                    <div className='flex items-center'>
                        <FaGasPump className='mr-2'></FaGasPump>
                        {type}
                    </div>
                    <div className='flex font-semibold text-sm'>
                        {month}
                        <div className="divider divider-horizontal"></div>
                        {year}
                        <div className="divider divider-horizontal"></div>
                        {milage} km
                    </div>

                    <div className='flex items-center'>
                        <div className='avatar'>
                            <div className='w-5, h-10 rounded-full mr-2'>
                                <img src={photoURL} alt="" />
                            </div>
                        </div>
                        <div>
                            {users?.status !== 'verified' && <FaRegCheckCircle className='bg-blue-600 rounded-full mr-2'></FaRegCheckCircle>}
                        </div>
                        {location}
                    </div>
                    <div className='flex text-sm'>
                        {seller}
                        <div className="divider divider-horizontal"></div>
                        {phone}
                        <div className="divider divider-horizontal"></div>
                        {email}
                    </div>

                    <div className='flex mt-2'>
                        <p className='text-primary font-extrabold text-start'>Sale: ${resale}</p>
                        <div className="divider divider-horizontal"></div>
                        <p className='text-secondary'>Original: ${original}</p>
                    </div>
                </div>

                <div className="card-body pt-0">
                    <label
                        htmlFor='bookModal'
                        className="btn btn-primary hover:bg-secondary text-white"
                        onClick={() => setAdvertiseItem(item)}
                    >
                        Book Now
                    </label>
                </div>
            </div>
        );
    }
};

export default AdvertisedItem;