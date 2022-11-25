import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';


const CategoryDetails = () => {
    const allproducts = useLoaderData()
    console.log(allproducts.products)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {
                allproducts.products.map((product, i) => <Product
                    key={i}
                    product={product}>

                </Product>)
            }
        </div>
    );
};

export default CategoryDetails;