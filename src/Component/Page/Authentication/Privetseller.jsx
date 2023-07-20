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
            const res =await fetch(`http://localhost:5000/sellerCheck?seller=${users?.email}`)
            const data = res.json()
            return data
        }
    })
    if (loding || isLoading) {
        return <Loding></Loding>
    }
    if (users && data) {
        return children
    }
    return <Navigate to={'/login'} state={{from:location}} replace ></Navigate>
};

export default Privetseller;