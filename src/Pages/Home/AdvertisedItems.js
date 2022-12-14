import { useQuery } from '@tanstack/react-query';
import AdvertisedItem from './AdvertisedItem';
import Spinner from '../Shared/Spinner/Spinner';
import { useState } from 'react';
import ItemBookModal from './ItemBookModal';


const AdvertisedItems = () => {
    const [advertiseItem, setAdvertiseItem] = useState(null)

    const { data: advertisedItems = [], isLoading } = useQuery({
        queryKey: ['advertisedItems'],
        queryFn: () => fetch(`https://simora-motors-server.vercel.app/advertisedItems`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    });


    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='text-center'>
            <h2 className='text-2xl font-bold mt-16 text-primary text-center'>Advertised items</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    advertisedItems.map((item, i) => <AdvertisedItem
                        key={i}
                        item={item}
                        setAdvertiseItem={setAdvertiseItem}
                    >
                    </AdvertisedItem>)
                }
            </div>

            <>
                {
                    advertiseItem &&
                    <ItemBookModal
                        advertiseItem={advertiseItem}
                        setAdvertiseItem={setAdvertiseItem}>

                    </ItemBookModal>
                }
            </>
            {/* <Link to='/ourcars'>
                    <button className='btn btn-primary text-white hover:bg-secondary mt-8 mb-8'>See More Items</button>
                </Link> */}
        </div>
    );

};

export default AdvertisedItems;