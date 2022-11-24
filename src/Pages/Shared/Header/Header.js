import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './logo.png'
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
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/ourcars'>Our Cars</NavLink></li>
        <li><NavLink to='/thebrand'>The Brand</NavLink></li>
        {
            user?.uid ?
                <>
                    <li tabIndex={0}>
                        <Link className="justify-between">
                            Dashboard
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                        </Link>
                        <ul className="p-2 bg-base-100">
                            <li><Link>Submenu 1</Link></li>
                            <li><Link>Submenu 2</Link></li>
                        </ul>
                    </li>
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
                <div className="dropdown">
                    <label tabIndex={0} className=" md:hidden">
                        <img src={Logo} alt="" style={{ width: 40, height: 40 }} />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img src={Logo} alt="" className='hidden md:block' style={{ height: 56, width: 56 }} />
                <Link to='/' className="btn btn-ghost flex-col">
                    <p className='text-primary text-xl'>SIMORA</p>
                    <p className='text-normal capitalize italic'>Motors</p>
                </Link>
            </div>
            <div className="navbar-end hidden md:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;