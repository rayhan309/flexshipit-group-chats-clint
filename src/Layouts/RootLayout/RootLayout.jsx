import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../../Components/Navber';
import Footer from '../../Components/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navber />
           <main className={`min-h-[calc(100vh-340px)]`}>
             <Outlet />
           </main>
            <Footer />
        </div>
    );
};

export default RootLayout;