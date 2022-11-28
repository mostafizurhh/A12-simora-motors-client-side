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
            const res = await fetch(`http://localhost:5000/advertised?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    /* delete a product */
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/advertised/${id}`, {
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

    /* update product saleStatus */
    const handleSaleStatus = id => {
        fetch(`http://localhost:5000/advertised/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Product Status Modified', { duration: 3000 })
                    refetch()
                }
            })
    }
    const handleUpdateSaleStatus = id => {
        fetch(`http://localhost:5000/advertised/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Product Status Modified', { duration: 3000 })
                    refetch()
                }
            })
    }


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
                                    {/* toggle button and change sale status */}
                                    <td>
                                        {
                                            item.saleStatus === 'Sold' &&
                                            <button onClick={() => handleSaleStatus(item._id)} className='btn btn-primary btn-sm'>Sold</button>

                                        }
                                        {
                                            item.saleStatus === 'Available' &&
                                            <button onClick={() => handleSaleStatus(item._id)} className='btn btn-primary btn-sm'>Available
                                            </button>

                                        }
                                    </td>

                                    {/* toggle button and change sale status */}
                                    <td>
                                        {
                                            item.saleStatus === 'Sold' ||
                                            <button onClick={() => handleUpdateSaleStatus(item._id)} className='btn btn-primary btn-sm'>Sold</button>

                                        }
                                        {
                                            item.saleStatus === 'Available' ||
                                            <button onClick={() => handleUpdateSaleStatus(item._id)} className='btn btn-primary btn-sm'>Available
                                            </button>

                                        }
                                    </td>

                                    <td>
                                        <button onClick={() => handleDelete(item._id)} className='btn btn-error btn-sm'>Delete</button></td>
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