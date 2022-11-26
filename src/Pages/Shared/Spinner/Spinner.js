import React from 'react';
import { RotatingLines } from 'react-loader-spinner';


const Spinner = () => {
    return (
        <div className='absolute flex justify-between transform -translate-y-1/2 right-1/2 bottom-1/2'>
            <RotatingLines
                strokeColor="#002B5B"
                strokeWidth="8"
                animationDuration="0.55"
                width="96"
                visible={true}
            />
        </div>
    );
};

export default Spinner;