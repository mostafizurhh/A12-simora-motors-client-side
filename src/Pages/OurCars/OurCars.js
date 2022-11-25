import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../Shared/Spinner/Spinner';
import AllCars from './AllCars';

const OurCars = () => {
    const { data: allproducts = [], isLoading } = useQuery({
        queryKey: ['allproducts'],
        queryFn: () => fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {
                allproducts.map((allcars, i) => <AllCars
                    key={i}
                    allcars={allcars}>
                </AllCars>)
            }
        </div>
    );
};

export default OurCars;