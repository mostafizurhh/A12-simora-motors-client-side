import React from 'react';
import Category from './Category';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../Shared/Spinner/Spinner';

const ProductCategories = () => {

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () =>
            fetch('http://localhost:5000/allcategories')
                .then(res => res.json())
    })
    if (isLoading) {
        return <div className='text-center'>
            <Spinner></Spinner>
        </div>
    }

    return (
        <div>
            <h2 className='text-2xl font-bold mt-16 mb-16 text-primary text-center'>Select Your Favourite Category</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:gap-1 gap-6'>
                {
                    categories.map((category) => <Category
                        key={category._id}
                        category={category}>
                    </Category>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;