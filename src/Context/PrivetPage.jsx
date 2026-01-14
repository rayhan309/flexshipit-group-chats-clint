import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetPage = ({children}) => {
    const {user, loading} = use(AuthContext);
    const locations = useLocation();

    if(loading) return <h3>Loading..</h3>

    if(user) return children;

    return <Navigate state={locations.pathname} to={'/login'}></Navigate>;
};

export default PrivetPage;