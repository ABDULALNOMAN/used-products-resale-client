import React from 'react';
import { Link } from 'react-router-dom';

const ServicesItem = ({ item }) => {
    const { name, picture, _id } = item
    console.log(item)
    return (
        <div>
            <div className=" card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                    <Link to={`/categroy/${_id}`}><button className="btn btn-primary">categroy</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesItem;