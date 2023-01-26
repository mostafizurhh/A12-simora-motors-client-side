import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaGasPump, FaRegCheckCircle } from 'react-icons/fa';
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Spinner from '../Shared/Spinner/Spinner';


const AllCars = ({ allcars, setAllAdvertiseItem, allAdvertiseItem }) => {

    const { name, image, resale, original, year, type, milage, seller, location, photoURL, phone, email, condition, posted } = allcars;

    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('https://simora-motors-server.vercel.app/users/')
            .then(res => res.json())
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    if (allcars.saleStatus === 'Available') {

        return (
            <div className="bg-base-100 border text-primary shadow-xl mb-8 hover:bg-primary hover:text-white">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className='flex flex-col md:flex-row'>
                        <PhotoView src={image}>
                            <figure><img src={image} alt="Cars" style={{ height: 250, borderRadius: 30 }} className='w-96 p-4' /></figure>
                        </PhotoView>

                        <div className='p-3'>
                            <div className="card-title">{name}</div>
                            <div className='flex items-center py-2'>
                                <FaGasPump className='mr-2'></FaGasPump>
                                {type}
                            </div>
                            <div className='flex font-semibold text-sm'>
                                {year}
                                <div className="divider divider-horizontal"></div>
                                {milage} km
                            </div>

                            <div className='flex py-2 items-center'>
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

                            <div className='flex text-sm pb-2'>
                                {phone}
                                <div className="divider divider-horizontal"></div>
                                {email}
                            </div>
                            <div className='flex-col text-sm'>
                                <p className='text-start font-bold animate-pulse'> Condition: {condition}</p>
                                <p className='text-start font-semibold'>Posted: {posted}</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between'>
                        <div className='flex md:flex-col justify-between p-3'>
                            <p className='font-extrabold text-start animate-bounce'>Sale: ${resale}</p>
                            <p className=''>New: ${original}</p>
                        </div>
                        <div className="card-actions justify-end p-3">
                            <label
                                htmlFor='bookModal'
                                className="btn btn-success btn-outline"
                                onClick={() => setAllAdvertiseItem(allcars)}
                            >
                                Book Now
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        );
    }


};

export default AllCars;