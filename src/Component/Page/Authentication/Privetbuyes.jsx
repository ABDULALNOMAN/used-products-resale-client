import { useQuery } from '@tanstack/react-query';
import React, { useContext, } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { CallContext } from '../../Context/Context';
import Loding from '../other/Loding';

const Privetbuyes = ({children}) => {
    
    const location = useLocation()
    const { loding, users } = useContext(CallContext)
    const { data } = useQuery({
        queryKey: [users],
        queryFn: async () => {
            const res =await fetch(`http://localhost:5000/buyersCheck?buyer=${users?.email}`)
            const data = res.json()
            return data
        }
    })
    console.log(data)
    
    if (loding) {
        return <Loding></Loding>
    }
    if(users && data && data.user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default Privetbuyes;