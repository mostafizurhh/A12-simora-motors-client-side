import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';
import { useAdmin } from '../Hooks/useAdmin/useAdmin';
import { useSeller } from '../Hooks/useSeller/useSeller';
import Spinner from '../Pages/Shared/Spinner/Spinner';



const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation()

    if (loading || isSellerLoading || isAdminLoading) {
        return <Spinner></Spinner>
    }

    if (user || isSeller || isAdmin) {
        return children;
    }

    return <Navigate to='/login'
        state={{ from: location }} replace>
    </Navigate>
};

export default SellerRoute;