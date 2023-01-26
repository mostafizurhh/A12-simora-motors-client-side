import React from 'react';
import { FaClock, FaEnvelope, FaPhoneSquareAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='mt-16 text-center'>
            <h2 className=' text-primary text-2xl font-bold mb-5'>Contact Us</h2>
            <div className='lg:flex justify-between text-primary font-bold hover:bg-primary hover:text-white p-8'>
                <div className='flex items-center mt-3'>
                    <FaPhoneSquareAlt className='mr-4'></FaPhoneSquareAlt>
                    <p className='text-start'>+880 - 1920 111 920</p>
                </div>
                <div className='flex items-center mt-3'>
                    <FaEnvelope className='mr-4'></FaEnvelope>
                    <p className='text-start'>info@simoramotors.com</p>
                </div>
                <div className='flex items-center mt-3'>
                    <FaClock className='mr-4'></FaClock>
                    <p className='text-start'>Opening Hours: <br />
                        Monday-Friday (8:00 - 18:00)</p>
                </div>
                <div className='flex items-center mt-3'>
                    <FaMapMarkerAlt className='mr-4'></FaMapMarkerAlt>
                    <p className='text-start'>House no: 88, Rd -19, Dhaka 1230, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;