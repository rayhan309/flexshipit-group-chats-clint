import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading/Loading';

const PrivetPage = ({children}) => {
    const {user, loading} = use(AuthContext);
    const locations = useLocation();

    if(loading) return <Loading />
    if(user) return children;

    return <Navigate state={locations.pathname} to={'/login'}></Navigate>;
};

export default PrivetPage;