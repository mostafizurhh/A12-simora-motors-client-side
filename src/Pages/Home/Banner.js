import React from 'react';
import car1 from '../../assets/sliders/car1.jpg'
import car2 from '../../assets/sliders/car2.jpg'
import car3 from '../../assets/sliders/car3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative md:h-[650px] w-full">
                <img src={car1} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative md:h-[650px] w-full">
                <img src={car2} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative md:h-[650px] w-full">
                <img src={car3} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;