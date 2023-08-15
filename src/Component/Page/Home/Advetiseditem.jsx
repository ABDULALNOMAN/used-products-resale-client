import React from 'react';

const Advetiseditem = ({item }) => {
    const {categroy, date ,description , image,location, name,number,originl,product_type,resale,sellerName,seller_email,use}=item
    return (
        <div>
            <div className="flex flex-row bg-sky-500 h-full rounded-lg capitalize w-full gap-4">
                <img className='h-full rounded-lg w-4/12' src={image} alt="Movie"/>
                <div className="w-full ">
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