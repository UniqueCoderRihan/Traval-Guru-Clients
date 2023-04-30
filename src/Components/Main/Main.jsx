import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './Main.css'
import Background from '../../../public/images/icons/Rectangle 1.png'
const Main = () => {
    return (
        <div className='mainBody'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;