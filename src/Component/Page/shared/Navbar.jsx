import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CallContext } from '../../Context/Context';
import { GoThreeBars } from 'react-icons/go';
import useDarkSide from '../../custom/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Navbar = () => {
    const { users, LogOut} = useContext(CallContext)
    const [colorTheme , setTheme ] = useDarkSide()
    const [darkSide, setDarkSide ] = useState(colorTheme === "light"? true : false)

    const handleLogOut = () => {
        LogOut()
            .then(result => {
                const user = result.user;
            })
        .catch((error) => {
        })
    }
    const toggleDarkMode =(checked)=>{
        setTheme(colorTheme)
        setDarkSide(checked)
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
        <DarkModeSwitch
            className={`${darkSide ? 'text-slate-500 ': 'text-amber-600'} md:ml-0 ml-3`}
            checked={darkSide}
            onChange={toggleDarkMode}
            size={30}
            />
    </>
    return (
        <div className='bg-secondary relative'>
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <Link to="/" className="btn btn-ghost  text-xl uppercase italic">gsmarea</Link>
                    <label htmlFor="my-drawer" className=" drawer-button"><GoThreeBars></GoThreeBars></label>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 flex items-center justify-center">
                            {Navbar}
                        </ul>
                    </div>
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow right-0 bg-black rounded-box w-52 ">
                            {Navbar}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;