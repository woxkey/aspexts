import React from 'react';
import {Outlet} from 'react-router'
import Header from "../Header/Header.tsx";

const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Layout;
