import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { CallContext } from '../../Context/Context';

const Myproducts = () => {
    const { users } = useContext(CallContext)
    console.log(users)
    // const { data,isLoading } = useQuery({
    //     querykey: [users],
    //     queryFn: async() => {
    //         const res = await fetch(`http://localhost:5000/myproducts?email=${users?.email}`)
    //         const data = res.json();
    //         return data
    //     }
    // })
    // if (isLoading) {
    //     return <p>div</p>
    // }
    useEffect(() => {
        fetch(`http://localhost:5000/myproducts?email=${users?.email}`)
            .then(res => res.json())
        .then(data=>console.log(data))
    }, [users])
    
    return (
        <div>
            hello
        </div>
    );
};

export default Myproducts;