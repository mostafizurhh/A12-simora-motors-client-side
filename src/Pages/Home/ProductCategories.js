import React, { useEffect, useState } from 'react';
import Category from './Category';

const ProductCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className='text-2xl font-bold mb-8 text-primary'>Select Your Favourite Category</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:gap-1 gap-6'>
                {
                    categories.map((category, i) => <Category
                        key={i}
                        category={category}>
                    </Category>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;