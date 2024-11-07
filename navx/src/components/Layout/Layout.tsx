import React from 'react';
import Navbar from '../Navbar/Navbar';

// returning react functional component 
const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}; 
export default Layout;