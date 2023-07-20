import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { CallContext } from '../../Context/Context';
import Myproductsitem from './Myproductsitem';

const Myproducts = () => {
    const { users } = useContext(CallContext)
    const { data:productsData=[],refetch } = useQuery({
        queryKey: ["myproducts"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts?email=${users?.email}`)
            const data = res.json()
            return data
        }
        
    })
    const handleProductDelete = (id) => {
        fetch(`http://localhost:5000/deleteadvatise?id=${id}`, {
            method:'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('delete products')
                    refetch()
                }
            })
    }
    return (
        <div className='container mx-auto my-10'>
            <div className='grid lg:grid-cols-2 gap-3'>
                {
                    productsData.map(product => <Myproductsitem
                        key={product._id}
                        product={product}
                        handleProductDelete={handleProductDelete}
                    ></Myproductsitem>)
                }
            </div>
        </div>
    );
};

export default Myproducts;