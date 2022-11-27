import React from 'react';
import { FaClock, FaEnvelope, FaPhoneSquareAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='mt-16 text-center'>
            <h2 className=' text-primary text-2xl font-bold mb-5'>Contact Us</h2>
            <div className='lg:flex justify-between bg-primary text-white p-8'>
                <div className='flex items-center justify-center mt-3'>
                    <FaPhoneSquareAlt className='text-white mr-2'></FaPhoneSquareAlt>
                    <p>+880 - 1920 111 920</p>
                </div>
                <div className='flex items-center justify-center mt-3'>
                    <FaEnvelope className='text-white mr-2'></FaEnvelope>
                    <p>info@simoramotors.com</p>
                </div>
                <div className='flex items-center justify-center mt-3'>
                    <FaClock className='text-white mr-2'></FaClock>
                    <p>Opening Hours: <br />
                        Monday-Friday (8-18)</p>
                </div>
                <div className='flex items-center justify-center mt-3'>
                    <FaMapMarkerAlt className='text-white mr-2'></FaMapMarkerAlt>
                    <p>House no: 88, Rd -19, Dhaka 1230, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;