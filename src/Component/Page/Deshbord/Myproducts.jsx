import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Myproducts = () => {
    const { users } = useQuery({
        querykey: [''],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts?email=${users?.email}`)
            const data = res.json();
            return data
        }
    })
    return (
        <div>
            
        </div>
    );
};

export default Myproducts;