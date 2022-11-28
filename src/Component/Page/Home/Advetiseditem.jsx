import React from 'react';

const Advetiseditem = ({item }) => {
    console.log(item)
    const {categroy, date ,description , image,location, name,number,originl,product_type,resale,sellerName,seller_email,use}=item
    return (
        <div>
            <div className="flex flex-row bg-info h-full rounded-lg capitalize">
                <figure className='h-full'><img className='h-full rounded-lg' src={image} alt="Movie"/></figure>
                <div className="w-full p-4">
                    <div>
                        <h2 className="card-title">{name}</h2>
                    </div>
                    <hr />
                    <div>
                        <p className='text-lg'>original price: {originl} Taka</p>
                        <p className='text-lg'>resale price: {resale} Taka</p>
                        <p className='text-lg'>use: {use} yrs</p>
                        <p className='text-lg'>location: {location}</p>
                        <p className='text-lg'>seller Name: {sellerName}</p>
                        <p className='text-lg'>years of use: {use}</p>
                        <p className='text-lg'>date: {date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advetiseditem;