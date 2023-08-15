import React from 'react';
import { useNavigation } from 'react-router-dom';
import Loding from '../other/Loding';

const Productsitem = ({ data, setModalitem }) => {
    const navigate = useNavigation()
    const { image, location, name, originl, resale, sellerName, use, status,date } = data
    if (navigate.state === 'loding') {
        return <Loding></Loding>
    }
    return (
        <div className='h-full'>
            <div className=" shadow-md shadow-gray-400 flex justify-evenly h-full w-full rounded-md">
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
                    <p>years of use: {use}</p>
                    <p>date: {date}</p>
                    <label disabled={status=='sold'} onClick={()=>setModalitem (data)} htmlFor="my-modal-6" className="btn bg-info hover:bg-info rounded-full border-none text-gray-200">Book now</label>
                </div>
            </div>
        </div>
    );
};

export default Productsitem;