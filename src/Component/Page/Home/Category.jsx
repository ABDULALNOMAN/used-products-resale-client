import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loding from '../other/Loding';
import ServicesItem from './ServicesItem';
import Errorpage from '../../Errorpage';

const Category = () => {
    const { data:items=[],isLoading, error} = useQuery({
        queryKey: ['services'],
        queryFn: (async() => {
            const res = await fetch('https://gsm-area-server.vercel.app/services')
            const data = res.json()
            return data
        })
    })
    return (
        <div className='container mx-auto my-10'>
            <h2 className='text-3xl font-semibold text-center mb-6 uppercase'>category</h2>
            {isLoading && <Loding></Loding>}
            <div className='grid grid-cols-3 gap-3'>
                {items?.length? items?.map(item =><ServicesItem key={item._id} item={item}></ServicesItem>):""}
            </div>
            {error && <Errorpage></Errorpage>}
        </div>
    );
};

export default Category;