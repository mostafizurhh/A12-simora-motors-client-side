import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaGasPump, FaRegCheckCircle } from 'react-icons/fa';
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const AllCars = ({ allcars, setAllAdvertiseItem }) => {

    const { name, image, resale, original, year, month, type, milage, seller, location, photoURL, phone, email, condition, posted } = allcars;

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users/')
            .then(res => res.json())
    })

    return (
        <div className="card lg:card-side bg-base-100 border shadow-xl mb-8 ">
            <PhotoView src={image}>
                <figure><img src={image} alt="cars" className='h-full' /></figure>
            </PhotoView>
            <div className='flex-grow-1'>
                <div className="card-body">
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
                        <>
                            {users?.status !== 'verified' && <FaRegCheckCircle className='bg-blue-600 rounded-full mr-2'></FaRegCheckCircle>}
                        </>

                        <div className='ml-2'>
                            <p className='text-start'>{seller}</p>
                            <p>{location}</p>
                        </div>
                    </div>
                    <div className='flex text-sm'>
                        {phone}
                        <div className="divider divider-horizontal"></div>
                        {email}
                    </div>

                    <p className='text-start font-bold text-primary'> Condition: {condition}</p>
                    <p className='text-start'>{posted}</p>

                    <div className='flex my-2'>
                        <p className='text-primary font-extrabold text-start'>Sale: ${resale}</p>
                        <div className="divider divider-horizontal"></div>
                        <p className='text-secondary'>Original: ${original}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <label
                            htmlFor='bookModal'
                            className="btn btn-primary hover:bg-secondary text-white"
                            onClick={() => setAllAdvertiseItem(allcars)}
                        >
                            Book Now
                        </label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllCars;