import React from 'react';
import car1 from '../../assets/sliders/car1.jpg'
import car2 from '../../assets/sliders/car2.jpg'
import car3 from '../../assets/sliders/car3.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full md:h-[850px]">
                <div id="slide1" className="carousel-item w-full">
                    <img src={car1} alt='' className="w-full" />
                </div>
                <div id="slide2" className="carousel-item w-full">
                    <img src={car2} alt='' className="w-full" />
                </div>
                <div id="slide3" className="carousel-item w-full">
                    <img src={car3} alt='' className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-3 gap-2">
                <a href="#slide1" className="btn btn- btn-outline btn-xs">1</a>
                <a href="#slide2" className="btn btn- btn-outline btn-xs">2</a>
                <a href="#slide3" className="btn btn- btn-outline btn-xs">3</a>
            </div>
        </div>
    );
};

export default Banner;