import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const ReportModal = ({ reportedItem, product, setReportedItem }) => {
    console.log(reportedItem)
    const { name, resale, image, seller } = reportedItem;
    const { user } = useContext(AuthContext)

    const handleItemReported = event => {
        event.preventDefault()
        const form = event.target;

        const customer = form.customer.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const reason = form.reason.value;

        const reportedinfo = {
            reportedProductId: reportedItem.productId,
            name,
            price: resale,
            reportedDate: new Date(),
            customer,
            email,
            phone,
            type: reportedItem.type,
            reason,
            image,
            seller
        }

        /* send reportedItemInfo data to server to create a new collection */
        fetch('https://simora-motors-server-mostafizurhh.vercel.app/reporteditems', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportedinfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReportedItem(null)
                toast.success('Your Report Has Been Sent', { duration: 3000 });
            })
    }


    return (
        <div>
            <input type="checkbox" id="report-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="report-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg text-primary mb-5 font-bold">{name}</h3>
                    <form onSubmit={handleItemReported}>

                        <input type="text" name='customer' placeholder="Full Name" defaultValue={user?.displayName} className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" readOnly />

                        <input type="email" name='email' placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" readOnly />

                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" required />

                        <input type="text" name='reason' placeholder="Why do you want to report?" className="input input-bordered w-full mb-5 max-w-xs md:max-w-md" required />

                        <input type="submit" className="input input-bordered w-full mb-5 max-w-xs md:max-w-md btn btn-primary text-white" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ReportModal;