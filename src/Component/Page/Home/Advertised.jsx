import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loding from '../other/Loding';
import Advetiseditem from './Advetiseditem';

const Advertised = () => {
    const { data:advertise=[], isLoading, error} = useQuery({
        queryKey:['homeadvertise'],
        queryFn: async() => {
            const res = await fetch('https://gsm-area-server.vercel.app/homeadvertise')
            const data = res.json()
            return data
        }
    })
    return (
        <div className='container mx-auto mb-8'>
            <h1 className='text-3xl text-center mb-3 font-semibold capitalize'>advertised</h1>
            {isLoading && <Loding></Loding>}
            <div className='grid lg:grid-cols-2  gap-4'>
                { advertise.length ? advertise.map(item => <Advetiseditem key={item._id} item={item}></Advetiseditem>):''}
            </div>
            {error && <p>error...</p>}
        </div>
    );
};

export default Advertised;