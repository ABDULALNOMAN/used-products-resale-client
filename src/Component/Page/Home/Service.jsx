import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ServicesItem from './ServicesItem';

const Service = () => {
    const { data:items=[] } = useQuery({
        queryKey: ['services'],
        queryFn: (async() => {
            const res = await fetch('http://localhost:5000/services')
            const data = res.json()
            return data
        })
    })
    console.log(items)
    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                items.map(item =><ServicesItem key={item._id} item={item}></ServicesItem>)
            }
        </div>
    );
};

export default Service;