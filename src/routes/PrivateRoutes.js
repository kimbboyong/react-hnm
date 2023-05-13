import React from 'react'
import { Navigate } from 'react-router-dom';
import Loign from '../page/Login';
import ProductDetial from '../page/ProductDetial';

const PrivateRoutes = ({ authenticate }) => {
    return authenticate === true ? <ProductDetial /> : <Navigate to="/login" />;


}

export default PrivateRoutes