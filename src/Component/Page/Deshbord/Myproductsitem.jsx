import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Myproductsitem = ({ product,handleProductDelete }) => {
    const { categroy, date, description, image, status, location, name, customerInfo, seller_email, resale,_id } = product
    const [adver ,setAdver]=useState(null)
    const productsData = 
        status=='sold' ? <>
            <h2 className = "card-title" > { name }</h2>
            <p>category: {categroy}</p>
            <p>customer name: {customerInfo?.user}</p>
            <p>customer email: {customerInfo?.email}</p>
            <p>status: {status}</p>
        </> : <>
             <h2 className = "card-title" > { name }</h2>
            <p>category: {categroy}</p>
            <p>location: {location}</p>
            <p>email: {seller_email}</p>
            <p>price: {resale}</p>
            <p>status: {status}</p>   
        </>
    const handleAdvertize = (product) => {
        const data = {
                productsId:product._id,
                image:product.image,
                name: product.name,
                location:product.location,
                resale:product.resale,
                originl:product.originl,
                use:product.use,
                sellerName:product.sellerName,
                categroy:product.categroy,
                product_type:product.product_type,
                number:product.number,
                description:product.description,
                date:product.date,
                seller_email:product.seller_email,
                status:product.status
            }
        fetch('https://gsm-area-server.vercel.app/advertize',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('addvertise product added')
                    setAdver(data.acknowledged)
                }
            })
    }
    return (
        <div>
            <div className="flex flex-row bg-gray-800 shadow-xl h-full p-3 relative rounded-md">
                <figure className='h-full w-1/3'><img className='h-full rounded-lg' src={image} alt="Movie"/></figure>
                <div className="w-2/3 ml-4">
                    <div>
                       {productsData} 
                    </div>
                    <div className="flex flex-row bottom-4 absolute right-3">
                        <button onClick={()=>handleProductDelete(_id)} className="btn btn-warning btn-sm border-none text-gray-300 mr-4">delete</button>
                        <button disabled={status == 'sold'|| adver===true} onClick={() => handleAdvertize(product)} className="btn bg-info btn-sm border-none text-gray-300 hover:bg-info" >advertize</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myproductsitem;