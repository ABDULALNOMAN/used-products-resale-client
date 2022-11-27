import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CallContext } from '../../Context/Context';
import Navbar from '../shared/Navbar';


const Deshbord = () => {
    const { users } = useContext(CallContext)
    console.log(users)
    const { data:existing } = useQuery({
        queryKey:[users],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${users?.email}`)
            const data = res.json()
            return data
        }
    })
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-52 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                        {existing?.user=="seller" ? <>
                            <li><Link to={'/deshbord/addproducts'}>Add a products</Link></li>
                            <li><Link>My products</Link></li>
                            <li><Link>My buyers</Link></li>
                        </> : <>
                            <li><Link to='/deshbord'>my orders</Link></li>
                            <li><Link>my wishlist</Link></li>
                        </>}
                        <li><Link to="/deshbord/allseler">All seller</Link></li>
                        <li><Link to='/deshbord/allbuyers'>All Buyers</Link></li>
                        <li><Link>Report item</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Deshbord;