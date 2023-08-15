import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { CallContext } from '../../../Context/Context';
import Loding from '../../other/Loding';

const Adminroute = ({children}) => {
    const { loding, users } = useContext(CallContext)
    const location = useLocation()
    const { data={},isLoading } = useQuery({
        queryKey:["admincheck", users],
        queryFn: async () => {
            const res =await fetch(`https://gsm-area-server.vercel.app/admincheck?admin=${users?.email}`)
            const data = res.json()
            return data
        }
    })
    if(loding || isLoading) {
        return <Loding></Loding>
    }
    if (users && data && data?.visitor) {
        return children
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default Adminroute;