import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loding from '../other/Loding';
import Advetiseditem from './Advetiseditem';

const Advertised = () => {
    const { data:advertise=[],isLoading } = useQuery({
        queryKey:['homeadvertise'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/homeadvertise')
            const data = res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loding></Loding>
    }
    return (
        <div className='container mx-auto mb-8'>
            <h1 className='text-3xl text-center mb-3 font-semibold capitalize'>advertised</h1>
            <div className='grid lg:grid-cols-2  gap-4'>
                {
                   advertise.length>=0 && advertise.map(item => <Advetiseditem key={item._id} item={item}></Advetiseditem>)
                }
            </div>
        </div>
    );
};

export default Advertised;