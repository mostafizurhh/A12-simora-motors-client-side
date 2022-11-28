import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../Shared/Spinner/Spinner';
import AllCars from './AllCars';
import BookModal from './BookModal';

const OurCars = () => {
    const [allAdvertiseItem, setAllAdvertiseItem] = useState(null)
    const { data: alladvertisedItems = [], isLoading } = useQuery({
        queryKey: ['alladvertisedItems'],
        queryFn: () => fetch('https://simora-motors-server-mostafizurhh.vercel.app/advertisedItems')
            .then(res => res.json())
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }



    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            {
                alladvertisedItems.map((allcars, i) => <AllCars
                    key={i}
                    allcars={allcars}
                    setAllAdvertiseItem={setAllAdvertiseItem}
                    allAdvertiseItem={allAdvertiseItem}
                >
                </AllCars>)
            }
            <>
                {
                    allAdvertiseItem &&
                    <BookModal
                        allAdvertiseItem={allAdvertiseItem}
                        setAllAdvertiseItem={setAllAdvertiseItem}>

                    </BookModal>
                }
            </>
        </div>
    );



};

export default OurCars;