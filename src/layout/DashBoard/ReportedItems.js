import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const ReportedItems = () => {
    const { user } = useContext(AuthContext)
    const { data: reports = [], isLoading, refetch } = useQuery({
        queryKey: ['reports', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://simora-motors-server-mostafizurhh.vercel.app/reporteditems`);
            const data = await res.json();
            return data;
        }
    })

    /* delete a product */
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            fetch(`https://simora-motors-server-mostafizurhh.vercel.app/reporteditems/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success(`Report Removed.`, { duration: 4000 });
                        refetch()
                    }
                })
        }
    }

    if (isLoading) {
        <Spinner></Spinner>
    }
    return (
        <div className='mx-5'>
            <h2 className='text-2xl font-bold mb-5 mt-8'>Reported Items</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Reason</th>
                            <th>Remove Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reports.map((report, i) =>
                                <tr className="hover text-primary"
                                    key={i}
                                >
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className='avatar w-36'>
                                            <img src={report.image} alt="" />
                                        </div>
                                    </td>
                                    <td>{report.name}
                                    </td>
                                    <td>{report.email}
                                    </td>
                                    <td>{report.phone}
                                    </td>
                                    <td>{report.reason}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(report._id)} className='btn btn-error btn-sm'>Delete</button>
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

export default ReportedItems;