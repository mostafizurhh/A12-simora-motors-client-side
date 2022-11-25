import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import Product from './Product';


const CategoryDetails = () => {
    const allproducts = useLoaderData();
    const [availableProduct, setAvailableProduct] = useState({})
    // console.log(allproducts)

    return (
        <div>
            <p className='mt-8 text-primary font-bold text-2xl'>{allproducts.categoryName}</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {
                    allproducts.products.map((product, i) => <Product
                        key={i}
                        product={product}
                        setAvailableProduct={setAvailableProduct}
                    >
                    </Product>)
                }
            </div>
            <BookingModal
                availableProduct={availableProduct}></BookingModal>
        </div>
    );
};

export default CategoryDetails;