import React from 'react';
import { Link } from 'react-router-dom';


const Category = ({ category }) => {
    const { categoryId, name, photo, description } = category
    return (
        <div className="card card-compact bg-base-100 border shadow-lg">
            <figure><img src={photo} alt="Shoes" style={{ height: 250, borderRadius: 30 }} className='w-full p-4' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{(description.slice(0, 120) + '...')}</p>
                <div className="card-actions justify-end">
                    <Link to={`/categorydetails/${categoryId}`}>
                        <button className="btn btn-primary hover:bg-secondary text-white">Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Category;