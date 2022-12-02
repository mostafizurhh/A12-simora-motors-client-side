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
            fetch('https://simora-motors-server.vercel.app/allcategories')
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
        const month = form.month.value;
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
            month,
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

        fetch('https://simora-motors-server.vercel.app/advertised', {
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
        <div>
            <form onSubmit={handleFormSubmit} className=' card-body'>
                <h2 className='font-bold mb-3 text-2xl text-primary'>Add a Product</h2>

                <input name='name' type="text" placeholder="Car Name" className="input input-bordered max-w-md mb-3" required />


                <input name='image' type="text" placeholder="Provide Photo URL" className="input input-bordered  max-w-md mb-3" required />

                <input name='original' type="text" placeholder="Original Price" className="input input-bordered  max-w-md mb-3" required />

                <input name='price' type="text" placeholder="Selling Price" className="input input-bordered  max-w-md mb-3" required />

                <input name='year' type="text" placeholder="1st registration year" className="input input-bordered  max-w-md mb-3" required />

                <select name='month' type="text" className="input input-bordered  max-w-md mb-3" required >
                    <option>Select Registration Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>

                <select name='type' type="text" className="input input-bordered max-w-md mb-3" required>
                    <option>Select Car Type</option>
                    <option>Disel</option>
                    <option>Petrol</option>
                    <option>LPG</option>
                    <option>Hybrid</option>
                    <option>Electric</option>
                </select>

                <select name='condition' type="text" className="input input-bordered max-w-md mb-3" required>
                    <option>Select Car Condition</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>

                <input name='milage' type="text" placeholder="Total milage" className="input input-bordered  max-w-md mb-3" required />

                <input name='seller' type="text" defaultValue={user?.displayName} className="input input-bordered  max-w-md mb-3" readOnly />

                <input name='email' type="email" defaultValue={user?.email} className="input input-bordered  max-w-md mb-3" readOnly />

                <input name='photoURL' type="text"
                    placeholder='Your photo' defaultValue={user?.photoURL} className="input input-bordered  max-w-md mb-3" readOnly />

                <input name='phone' type="text" placeholder="Your contact number" className="input input-bordered  max-w-md mb-3" required />

                <input name='location' type="text" placeholder="Your location" className="input input-bordered max-w-md mb-3" required />

                <select name='saleStatus' type="text" className="input input-bordered max-w-md mb-3" required>
                    <option>Available</option>
                </select>

                <button className='btn btn-primary text-white mt-4 max-w-md'>Advertise</button>
            </form>
        </div>
    );
};

export default AddAProduct;