import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    /* load all advertised items data from server */
    const { data: items = [], isLoading, refetch } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await fetch(`https://simora-motors-server.vercel.app/advertised?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            // console.log(data)
            return data;
        }
    })


    /* delete a product */
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            fetch(`https://simora-motors-server.vercel.app/advertised/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success(`Product deleted successfully`, { duration: 4000 });
                        refetch()
                    }
                })
        }
    }

    /* update userCategory */
    // const handleUserCategory = id => {
    //     fetch(`https://simora-motors-server.vercel.app/users/seller/${id}`, {
    //         method: 'PATCH'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.modifiedCount > 0) {
    //                 toast.success('Product Status Modified', { duration: 3000 })
    //                 refetch()
    //             }
    //         })
    // }


    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='mx-5'>
            <h2 className='text-2xl font-bold mb-5 mt-8'>My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Sale Status</th>
                            <th>Change Status</th>
                            <th>Remove Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, i) =>
                                <tr className="hover text-primary"
                                    key={i}
                                >
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className='avatar w-36'>
                                            <img src={item.image} alt="" />
                                        </div>
                                    </td>
                                    <td>{item.name}
                                    </td>
                                    <td>${item.resale}
                                    </td>
                                    <td>{item.saleStatus}
                                    </td>
                                    <td>
                                        <select name="" id="">
                                            <option value="">Available</option>
                                            <option value="">Sold</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item._id)} className='btn btn-error btn-sm'>Delete</button></td>
                                    {/* <td>
                                        {
                                            item.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                                <button className='btn btn-primary text-white btn-sm'>Pay Now</button></Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span className='text-green-700 font-bold btn btn-ghost text-xl'>Paid</span>
                                        }
                                    </td> */}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;