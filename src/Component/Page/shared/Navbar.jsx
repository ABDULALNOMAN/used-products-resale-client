import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CallContext } from '../../Context/Context';
import { GoThreeBars } from 'react-icons/go';

const Navbar = () => {
    const { users, LogOut, setOpen, open } = useContext(CallContext)
    const handleLogOut = () => {
        LogOut()
            .then(result => {
                const user = result.user;
            })
        .catch((error) => {
        })
    }
    const Navbar = <>
        <li className='font-semibold italic text-lg hover:text-sky-700'><Link to={'/'}>home</Link></li>
        <li className='font-semibold italic text-lg hover:text-sky-700'><Link to={'/blog'}>blog</Link></li>
        {users?.email ? <>
            <li className='font-semibold italic text-lg hover:text-sky-700'><Link to='/deshbord'>deshbord</Link></li>
            <li className='font-semibold italic text-lg hover:text-sky-700' onClick={handleLogOut}><Link>signOut</Link></li>
        </> : <>
            <li className='font-semibold italic text-lg hover:text-sky-700'><Link to='/login'>login</Link></li>
            <li className='font-semibold italic text-lg hover:text-sky-700'><Link to='/signup'>signUp</Link></li>
        </>}
    </>
    return (
        <div className='bg-secondary relative'>
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <a className="btn btn-ghost  text-xl uppercase italic">gsmarea</a>
                    <label htmlFor="my-drawer" className=" drawer-button"><GoThreeBars></GoThreeBars></label>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {Navbar}
                        </ul>
                    </div>
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow right-0 bg-black rounded-box w-52">
                            {Navbar}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;