import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../Errorpage";
import Login from "../Page/Authentication/Login";
import Privetbuyes from "../Page/Authentication/Privetbuyes";
import PrivetRoute from "../Page/Authentication/PrivetRoute";
import Privetseller from "../Page/Authentication/Privetseller";
import Signup from "../Page/Authentication/Signup";
import Blog from "../Page/Blog/Blog";
import AddProducts from "../Page/Deshbord/AddProducts";
import Adminroute from "../Page/Deshbord/Admin/Adminroute";
import Allbuyers from "../Page/Deshbord/Admin/Allbuyers";
import Allseller from "../Page/Deshbord/Admin/Allseller";
import Deshbord from "../Page/Deshbord/Deshbord";
import Myorders from "../Page/Deshbord/Myorders";
import Myproducts from "../Page/Deshbord/Myproducts";
import Home from "../Page/Home/Home";
import Products from "../Page/Home/Products";
import Main from "../Page/Layout/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: ([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element:<Signup></Signup>
            },
            {
                path:'/categroy/:name',
                element:<PrivetRoute><Products></Products></PrivetRoute>,
                loader: ({params}) => {
                    const data = fetch(`https://gsm-area-server.vercel.app/category/${params.name}`)
                    return data
                }
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },

        ])
    },
    {
        path: '/deshbord',
        element: <Deshbord></Deshbord>,
        children: ([
            {
                path: '/deshbord/myorders',
                element:<Privetbuyes><Myorders></Myorders></Privetbuyes>
            },
            {
                path: '/deshbord/addproducts',
                element:<Privetseller><AddProducts></AddProducts></Privetseller>
            },
            {
                path: '/deshbord/myproducts',
                element:<Myproducts></Myproducts>
            },
            {
                path:'/deshbord/allseler',
                element:<Adminroute><Allseller></Allseller></Adminroute>
            },
            {
                path:'/deshbord/allbuyers',
                element:<Adminroute><Allbuyers></Allbuyers></Adminroute>
            },
        ])
    },
    {
        path:'*',
        element:<Errorpage></Errorpage>
    }
])