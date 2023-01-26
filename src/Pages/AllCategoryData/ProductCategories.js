import React, { useState } from 'react';
import Category from './Category';
import axios from 'axios'

const ProductCategories = () => {
    const [categories, setCategories] = useState([])

    const getAllCategories = () => {
        axios.get('https://simora-motors-server.vercel.app/allcategories')
            .then(res => {
                // console.log(res.data)
                setCategories(res.data)
            })
            .catch(e => console.error(e))
    }


    return (
        <div className='text-center'>
            <h2 className='text-2xl font-bold mt-16 mb-16 text-primary text-center'>Choose From Your Favourite Category</h2>

            <button className='btn btn-success btn-outline text-white mb-8' onClick={getAllCategories}>Show All Categories</button>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 md:gap-2 gap-6'>
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