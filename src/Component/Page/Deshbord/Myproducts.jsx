import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { CallContext } from '../../Context/Context';
import Myproductsitem from './Myproductsitem';

const Myproducts = () => {
    const { users } = useContext(CallContext)
    const [productsData,setProductData]=useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myproducts?email=${users?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.length > 0) {
                    setProductData(data)    
                }
            })
    }, [users])
    
    return (
        <div className='container mx-auto my-10'>
            <div className='grid grid-cols-2 gap-3'>
                {
                   productsData.length && productsData.map(product => <Myproductsitem
                        key={product._id}
                        product={product}
                    ></Myproductsitem>)
                }
            </div>
        </div>
    );
};

export default Myproducts;