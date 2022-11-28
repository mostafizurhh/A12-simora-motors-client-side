import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import CategoryProduct from './CategoryProduct';




const CategoryDetails = () => {
    const allproducts = useLoaderData();
    const [availableProduct, setAvailableProduct] = useState(null)


    return (
        <div>
            <p className='mt-8 text-primary font-bold text-2xl'>{allproducts.categoryName}</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {
                    allproducts.products.map((product, i) => <CategoryProduct
                        key={i}
                        product={product}
                        setAvailableProduct={setAvailableProduct}
                    // booking={booking}
                    >
                    </CategoryProduct>)
                }
            </div>
            <>
                {
                    availableProduct &&
                    <BookingModal
                        availableProduct={availableProduct}
                        setAvailableProduct={setAvailableProduct}
                    >
                    </BookingModal>
                }
            </>
        </div>
    );
};

export default CategoryDetails;