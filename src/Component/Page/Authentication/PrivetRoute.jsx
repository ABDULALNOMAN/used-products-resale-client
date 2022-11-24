import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { CallContext } from '../../Context/Context';

const PrivetRoute = ({children}) => {
    const location = useLocation()
    const {loding} = useState(CallContext)
    if (loding) {
        return
    }
    if (users) {
        return children
    }
    return <Navigate to={'/login'} state={{form:location}}replace></Navigate>
};

export default PrivetRoute;