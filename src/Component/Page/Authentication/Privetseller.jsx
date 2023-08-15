import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { CallContext } from '../../Context/Context';
import Loding from '../other/Loding';

const Privetseller = ({ children }) => {
    const location = useLocation()
    const { loding, users } = useContext(CallContext)
    const { data, isLoading } = useQuery({
        queryKey: ["sellerCheck", users?.email],
        queryFn: async () => {
            const res =await fetch(`https://gsm-area-server.vercel.app/sellerCheck?seller=${users?.email}`)
            const data = await res.json()
            return data
        }
    })
    if (loding || isLoading) {
        return <Loding></Loding>
    }
    if (users && data && data?.visitor) {
        return children
    }
    return <Navigate to={'/login'} state={{from:location}} replace ></Navigate>
};

export default Privetseller;