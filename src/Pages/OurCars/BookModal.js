import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const BookModal = ({ allAdvertiseItem, product, setAllAdvertiseItem }) => {
    // console.log(allAdvertiseItem)
    const { name, resale, image, seller } = allAdvertiseItem;
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;

        const customer = form.customer.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.meeting.value;

        const bookinginfo = {
            bookingId: allAdvertiseItem._id,
            name,
            price: resale,
            bookingDate: new Date(),
            customer,
            email,
            phone,
            type: allAdvertiseItem.type,
            location,
            image,
            seller
        }

        /* send bookingInfo data to server to create a new collection */
        fetch('https://simora-motors-server-mostafizurhh.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookinginfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllAdvertiseItem(null)
                toast.success('Your Booking Is Confirmed', { duration: 3000 });
            })
    }


    return (
        <div>
            <input type="checkbox" id="bookModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg text-primary mb-5 font-bold">{name}</h3>
                    <h3 className="text-lg font-bold mb-5 text-primary">Price: ${resale}</h3>
                    <form onSubmit={handleBooking}>

                        <input type="text" name='customer' placeholder="Full Name" defaultValue={user?.displayName} className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" readOnly />

                        <input type="email" name='email' placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" readOnly />

                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" required />

                        <input type="text" name='meeting' placeholder="Where and when do you want to meet?" className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" required />

                        <input type="submit" className="input input-bordered w-full mb-5 max-w-xs md:max-w-md btn btn-primary text-white" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default BookModal;