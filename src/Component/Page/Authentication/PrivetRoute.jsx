import React, { useContext } from 'react';
import { Navigate, useLocation  } from 'react-router-dom';
import { CallContext } from '../../Context/Context';
import Loding from '../other/Loding';

const PrivetRoute = ({children}) => {
    const { loding, users } = useContext(CallContext)
    const location = useLocation()
    if (loding) {
        return <Loding></Loding>
    }
    if(users && users?.uid){
        return children
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default PrivetRoute;