import React from 'react';

const Advetiseditem = ({item }) => {
    console.log(item)
    const {categroy, date ,description , image,location, name,number,originl,product_type,resale,sellerName,seller_email,use}=item
    return (
        <div>
            <div className="flex flex-row bg-sky-500 h-full rounded-lg capitalize">
                <figure className='h-full'><img className='h-full rounded-lg' src={image} alt="Movie"/></figure>
                <div className="w-full p-4">
                    <div>
                        <h2 className="card-title">{name}</h2>
                    </div>
                    <hr />
                    <div>
                        <p className='text-md font-semibold text-gray-200'>original price: {originl} Taka</p>
                        <p className='text-md font-semibold text-gray-200'>resale price: {resale} Taka</p>
                        <p className='text-md font-semibold text-gray-200'>use: {use} yrs</p>
                        <p className='text-md font-semibold text-gray-200'>location: {location}</p>
                        <p className='text-md font-semibold text-gray-200'>seller Name: {sellerName}</p>
                        <p className='text-md font-semibold text-gray-200'>years of use: {use}</p>
                        <p className='text-md font-semibold text-gray-200'>date: {date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advetiseditem;