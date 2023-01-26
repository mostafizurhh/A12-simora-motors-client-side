import React from 'react';
import { PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const Category = ({ category }) => {
    // console.log(category)
    const { _id, categoryName, photo, description } = category
    return (
        <div className="card card-compact bg-base-100 border shadow-lg text-primary hover:bg-primary hover:text-white">
            <PhotoView src={photo}>
                <figure><img src={photo} alt="Shoes" style={{ height: 250, borderRadius: 30 }} className='w-full p-4' /></figure>
            </PhotoView>
            <div className="card-body">
                <h2 className="card-title">{categoryName}</h2>
                <p className='text-justify'>{(description.slice(0, 120) + '...')}</p>
                <div className="card-actions justify-end">
                    <Link to={`/allcategories/${_id}`}>
                        <button className="btn btn-success btn-outline ">Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Category;