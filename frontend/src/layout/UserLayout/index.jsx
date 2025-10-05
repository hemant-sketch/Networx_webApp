import React from 'react';
import NavBarComponent from '../../Components/Navbar/index.jsx';

export default function UserLayout({children}) {
    return (
        <div>
            <NavBarComponent/>
                {children}
        </div>
    )
}
