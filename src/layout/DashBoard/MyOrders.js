import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        <Spinner></Spinner>
    }
    return (
        <div className='mx-5'>
            <h2 className='text-2xl font-bold mb-5 mt-8'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) =>
                                <tr className="hover text-primary"
                                    key={i}
                                >
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className='avatar w-36'>
                                            <img src={booking.image} alt="" />
                                        </div>
                                    </td>
                                    <td>{booking.name}
                                    </td>
                                    <td>${booking.price}
                                    </td>
                                    <td>
                                        {
                                            booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                                <button className='btn btn-primary text-white btn-sm'>Pay Now</button></Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span className='text-green-700 font-bold btn btn-ghost text-xl'>Paid</span>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;