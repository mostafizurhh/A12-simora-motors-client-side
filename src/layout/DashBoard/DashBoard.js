import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import { useAdmin } from '../../Hooks/useAdmin/useAdmin';
import { useSeller } from '../../Hooks/useSeller/useSeller';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';

const DashBoard = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                        <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                                <li><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                            </>
                        }
                        {
                            isSeller | isAdmin ? <>
                                <li><Link to='/dashboard/addAProduct'>Add A Product</Link></li>
                                <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                                <li><Link to='/dashboard/myBuyers'>My Buyers</Link></li>
                            </>
                                :
                                <></>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoard; 