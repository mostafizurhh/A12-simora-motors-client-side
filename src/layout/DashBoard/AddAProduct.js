import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';


const AddAProduct = () => {
    const { user } = useContext(AuthContext)
    const { data: categories = [], } = useQuery({
        queryKey: ['categories'],
        queryFn: () =>
            fetch('http://localhost:5000/allcategories')
                .then(res => res.json())
    })

    /*--------------
     navigate user 
     ---------------*/
    const navigate = useNavigate()
    /*-------------------------------------------------*/

    const handleFormSubmit = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const original = form.original.value;
        const year = form.year.value;
        const type = form.type.value;
        const condition = form.condition.value;
        const milage = form.milage.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const photoURL = form.photoURL.value;
        const saleStatus = form.saleStatus.value;

        const advertised = {
            categoryId: categories._id,
            categoryName: categories.categoryName,
            name,
            image,
            resale: price,
            original,
            year,
            type,
            condition,
            milage,
            seller,
            email,
            location,
            phone,
            photoURL,
            saleStatus,
            posted: new Date()
        }

        fetch('http://localhost:5000/advertised', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(advertised)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Product added Successfully')
                    form.reset()
                    navigate('/dashboard/myproducts')/* navigate user */
                }
            })
            .catch(e => console.error(e))
    }

    return (
        <div className='mb-8'>
            <h2 className='font-bold mb-3 text-2xl text-primary'>Add a Product</h2>
            <form onSubmit={handleFormSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                <div className='form-control'>
                    <label className="label">
                        <span className="label-text font-semibold">Car Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Car Name" className="input input-bordered max-w-md mb-3" required />
                </div>
                <div className='form-control'>
                    <label className="label">
                        <span className="label-text font-semibold">Car Photo</span>
                    </label>
                    <input name='image' type="text" placeholder="Provide Photo URL" className="input input-bordered max-w-md mb-3" required />
                </div>
                <div className='form-control'>
                    <label className="label">
                        <span className="label-text font-semibold">Original Price</span>
                    </label>
                    <input name='original' type="number" placeholder="Original Price" className="input input-bordered  max-w-md mb-3" required />
                </div>
                <div className='form-control'>
                    <label className="label">
                        <span className="label-text font-semibold">Selling Price</span>
                    </label>
                    <input name='price' type="number" placeholder="Selling Price" className="input input-bordered  max-w-md mb-3" required />
                </div>

                <div className='form-control'>
                    <label className="label">
                        <span className="label-text font-semibold">1st Registration</span>
                    </label>
                    <input name='year' type="date" min="1950-01" className="input input-bordered max-w-md mb-3" required />
                </div>

                <div className='form-control'>
                    <label className="label">
                        <span className="label-text font-semibold">Select Car Type</span>
                    </label>
                    <select name='type' type="text" className="input input-bordered max-w-md mb-3" required>
                        <option></option>
                        <option>Disel</option>
                        <option>Petrol</option>
                        <option>LPG</option>
                        <option>Hybrid</option>
                        <option>Electric</option>
                    </select>
                </div>

                <div className='form-control'>
                    <label className="label">
                        <span className="label-text font-semibold">Select Car Condition</span>
                    </label>
                    <select name='condition' type="text" className="input input-bordered max-w-md mb-3" required>
                        <option></option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>

                <div className='form-control'>
                    <label className="label">
                        <span className="label-text font-semibold">Total Milage</span>
                    </label>
                    <input name='milage' type="number" placeholder="Total Milage" className="input input-bordered  max-w-md mb-3" required />
                </div>

                <div className='form-control'>
                    <label className="label">
                        <span className="label-text font-semibold">Seller Name</span>
                    </label>
                    <input name='seller' type="text" defaultValue={user?.displayName} className="input input-bordered  max-w-md mb-3" readOnly />
                </div>

                <div className='form-control'>
                    <label className="label">
                        <span className="label-text font-semibold">Seller Email</span>
                    </label>
                    <input name='email' type="email" defaultValue={user?.email} className="input input-bordered  max-w-md mb-3" readOnly />
                </div>

                <div className='form-control'>
                    <label className="label">
                        <span className="label-text font-semibold">Seller Phone</span>
                    </label>
                    <input name='phone' type="number" placeholder="Your contact number" className="input input-bordered  max-w-md mb-3" required />
                </div>

                <div className='form-control'>
                    <label className="label">
                        <span className="label-text font-semibold">Seller Photo</span>
                    </label>
                    <input name='photoURL' type="text" defaultValue={user?.photoURL} className="input input-bordered  max-w-md mb-3" readOnly />
                </div>

                <div className='form-control'>
                    <label className="label">
                        <span className="label-text font-semibold">Seller Location</span>
                    </label>

                    <input name='location' type="text" placeholder="Your location" className="input input-bordered max-w-md mb-3" required />
                </div>

                <div className='form-control'>
                    <label className="label">
                        <span className="label-text font-semibold">Product Availability</span>
                    </label>

                    <select name='saleStatus' type="text" className="input input-bordered max-w-md mb-3" required>
                        <option>Available</option>
                    </select>
                </div>
                <button className='btn btn-primary text-white mt-4 max-w-md'>Advertise</button>
            </form>
        </div>
    );
};

export default AddAProduct;