import React from 'react';
import { Link } from 'react-router-dom';

const ServicesItem = ({ item }) => {
    const { name, picture, _id } = item
    return (
        <div>
            <div className=" card-compact w-full h-full bg-base-100 shadow-xl rounded-md">
                <figure><img className='h-44 w-full rounded-md' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="">
                    <Link to={`/categroy/${name}`}><button className="btn bg-info w-full border-none text-white">categroy</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesItem;