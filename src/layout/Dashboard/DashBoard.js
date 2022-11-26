import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import { useAdmin } from '../../Hooks/useAdmin/useAdmin';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Shared/Header/Header';
import Footer from '../../Pages/Shared/Footer/Footer';

const DashBoard = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashBoard;