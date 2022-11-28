import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../Pages/Shared/Spinner/Spinner';


const AllBuyers = () => {
    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: () => fetch('http://localhost:5000/users/buyer')
            .then(res => res.json())
    })

    /* delete a buyer */
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success(`User deleted successfully`, { duration: 4000 });
                        refetch()
                    }
                })
        }
    }

    /* update user verification status */
    const handleVerify = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Seller Verified', { duration: 3000 })
                    refetch()
                }
            })
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='mx-5'>
            <h2 className='font-bold text-2xl mt-8 mb-5'>All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>User Category</th>
                            <th>Status</th>
                            <th>Take Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) =>
                                <tr className="hover text-primary"
                                    key={i}>
                                    <th>{i + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td>{buyer.userCategory}
                                    </td>
                                    <td>
                                        <button onClick={() => handleVerify(buyer._id)} className='btn btn-primary btn-sm'>
                                            {
                                                buyer?.status ? 'Verified' :
                                                    'Verify'
                                            }
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(buyer._id)} className='btn btn-error btn-sm'>Delete</button>
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

export default AllBuyers;