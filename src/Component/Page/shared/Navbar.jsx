import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CallContext } from '../../Context/Context';

const Navbar = () => {
    const { users, LogOut } = useContext(CallContext)
    const handleLogOut = () => {
        LogOut()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
        .catch((error) => {
            console.log(error)
        })
    }
    const Navbar = <>
        <li><Link to={'/'}>Item 1</Link></li>
        {users?.email ? <li onClick={handleLogOut}><Link>signOut</Link></li> : <>
            <li><Link to='/login'>login</Link></li>
            <li><Link to='/signup'>signUp</Link></li>
        </>}
    </>
    return (
        <div className='bg-base-100 relative'>
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {Navbar}
                        </ul>
                    </div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow right-0 bg-base-100 rounded-box w-52">
                            {Navbar}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;