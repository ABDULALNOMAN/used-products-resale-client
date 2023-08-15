import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet, useNavigate, useNavigation } from 'react-router-dom';
import { CallContext } from '../../Context/Context';
import Loding from '../other/Loding';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';


const Deshbord = () => {
    const { users,open } = useContext(CallContext)

    const { data:existing={}} = useQuery({
        queryKey:["users", users],
        queryFn: async() => {
            const res = await fetch(`https://gsm-area-server.vercel.app/users?email=${users?.email}`)
            const data = await res.json()
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
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {users && existing?.visitor == "seller" ? <>
                            <li><Link to={'/deshbord/addproducts'}>Add a products</Link></li>
                            <li><Link to={'/deshbord/myproducts'}>My products</Link></li>
                            <li><Link>My buyers</Link></li>
                            <li><Link>seller</Link></li>
                        </>:<></>}
                        {users && existing?.visitor =='user'?<>
                            <li><Link to='/deshbord/myorders'>my orders</Link></li>
                            <li><Link>my wishlist</Link></li>
                            <li><Link>user</Link></li>
                        </>:<></>}
                        {users && existing?.visitor == 'admin' ? <>
                            <li><Link to="/deshbord/allseler">All seller</Link></li>
                            <li><Link to='/deshbord/allbuyers'>All Buyers</Link></li>
                            <li><Link>Report item</Link></li>
                            <li><Link>admin</Link></li>
                        </> : <></>}
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};


export default Deshbord;