import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../Shared/Spinner/Spinner';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)

const Payment = () => {
    const booking = useLoaderData()
    const navigation = useNavigation();

    // console.log(booking)

    if (navigation.state === 'loading') {
        return <Spinner></Spinner>
    }

    return (
        <div className='flex items-center justify-center card text-center'>
            <h2 className='text-3xl font-bold mt-8'>Payment for <span className='text-secondary'>{booking.name}</span></h2>
            <h2 className='text-xl text-primary font-bold mt-3 mb-5'>Price: ${booking.price}</h2>
            <div className='card w-96 bg-base-200 shadow-xl'>
                <div className='card-body'>
                    <Elements stripe={stripePromise}>
                        <CheckOutForm
                            booking={booking} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;