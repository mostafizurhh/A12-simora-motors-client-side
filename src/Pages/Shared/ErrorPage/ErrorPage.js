import React from 'react'
import { Link } from 'react-router-dom'
import { MdBugReport, MdHourglassBottom } from "react-icons/md";

const ErrorPage = () => {
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div>
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>Sorry........</p>
                </div>

                <MdHourglassBottom className='text-red-600 font-bold text-8xl animate-spin'></MdHourglassBottom>
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl'>

                        <div className='flex justify-center items-center h-full text-rose-500'>
                            4
                            <div className='w-24 h-24 border-8 border-dotted rounded-full mt-3 border-black'></div>
                            4
                        </div>
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl mb-8 flex items-center justify-center'>
                        Page not found.Fishy?
                        <MdBugReport></MdBugReport>
                        ?
                        <MdBugReport></MdBugReport>
                        !
                        <MdBugReport></MdBugReport>
                    </p>
                    <Link to='/'>
                        <button className='btn btn-primary hover:bg-secondary'>
                            Back to safety
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage