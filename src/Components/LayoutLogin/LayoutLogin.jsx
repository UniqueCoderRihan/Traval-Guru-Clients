import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Login from '../Login/Login';

const LayoutLogin = () => {
    return (
        <div>
            <Header></Header>
            <Login></Login>
        </div>
    );
};

export default LayoutLogin;