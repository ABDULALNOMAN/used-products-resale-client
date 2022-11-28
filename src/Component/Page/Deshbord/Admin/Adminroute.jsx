import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { CallContext } from '../../../Context/Context';
import Loding from '../../other/Loding';

const Adminroute = ({children}) => {
    const { loding, users } = useContext(CallContext)
    const { data={} } = useQuery({
        queryKey:[users],
        queryFn: async () => {
            const res =await fetch(`https://gsm-area-server.vercel.app/admincheck?admin=${users?.email}`)
            const data = res.json()
            return data
        }
    })
    console.log(data)
    if(loding) {
        return <Loding></Loding>
    }
    if (users && data && data.user) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default Adminroute;