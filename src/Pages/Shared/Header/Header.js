import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png'
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(e => console.error(e))
    }

    const menuItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {/* <li><NavLink to='/ourcars'>Our Cars</NavLink></li> */}
        <li><NavLink to='/thebrand'>The Brand</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        {
            user?.uid ?
                <>
                    <li><NavLink to='/dashboard'>DashBoard</NavLink></li>
                    <li><button onClick={handleLogout}>Logout</button></li>
                </>
                :
                <>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/register'>Register</NavLink></li>
                </>
        }
        {
            user?.photoURL ?
                <div className="avatar tooltip tooltip-bottom hidden md:block" data-tip={user?.displayName}>
                    <div className='w-10 rounded-full'>
                        <img src={user?.photoURL} alt="" />
                    </div>
                </div>
                :
                <></>
        }
    </>

    return (
        <div className="navbar bg-base-100 p-0 mt-5">
            <div className="navbar-start">
                <label htmlFor="dashboard-drawer">
                    <img src={Logo} alt="" style={{ height: 56, width: 56 }} />
                </label>
                <Link to='/' className="flex-col text-center hidden md:block">
                    <p className='text-primary text-2xl'>SIMORA</p>
                    <p className='capitalize italic text-secondary'>Motors</p>
                </Link>
                <div className="dropdown">
                    <label tabIndex={0} className="md:hidden text-center">
                        <p className='text-primary text-2xl'>SIMORA</p>
                        <p className='capitalize italic text-secondary'>Motors</p>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
            </div>
            <div className="lg:navbar-end hidden md:navbar-center md:flex">
                <ul className="menu menu-horizontal">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;