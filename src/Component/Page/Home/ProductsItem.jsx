import React from 'react';

const Productsitem = ({ data,setModalitem }) => {
    const { image, location, name, originl, resale, sellerName, use } = data
    setModalitem(data)
    return (
        <div className='h-full'>
            <div className=" bg-base-100 shadow-xl flex justify-evenly  h-full w-full rounded-md">
                <div className=' w-1/2'>
                    <figure className='h-full'><img className='w-full h-full rounded-md' src={image} alt="Movie"/></figure>
                </div>
                <div className="card-body w-1/2">
                    <h2 className="card-title">{name}</h2>
                    <p>original price: {originl} Taka</p>
                    <p>resale price: {resale} Taka</p>
                    <p>use: {use} yrs</p>
                    <p>location: {location}</p>
                    <p>seller Name: {sellerName}</p>
                    <label htmlFor="my-modal-6" className="btn btn-primary rounded-full">Book now</label>
                </div>
            </div>
        </div>
    );
};

export default Productsitem;