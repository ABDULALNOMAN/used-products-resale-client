import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ServicesItem from './ServicesItem';

const Service = () => {
    const { data:items=[] } = useQuery({
        queryKey: ['services'],
        queryFn: (async() => {
            const res = await fetch('https://gsm-area-server.vercel.app/services')
            const data = res.json()
            return data
        })
    })
    console.log(items)
    return (
        <div className='container mx-auto my-10'>
            <h2 className='text-3xl font-semibold text-center mb-6 uppercase'>category</h2>
            <div className='grid grid-cols-3 gap-3'>
                {
                    items.map(item =><ServicesItem key={item._id} item={item}></ServicesItem>)
                }
            </div>
        </div>
    );
};

export default Service;