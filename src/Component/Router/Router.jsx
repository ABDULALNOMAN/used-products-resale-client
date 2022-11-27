import { createBrowserRouter } from "react-router-dom";
import Login from "../Page/Authentication/Login";
import PrivetRoute from "../Page/Authentication/PrivetRoute";
import Signup from "../Page/Authentication/Signup";
import AddProducts from "../Page/Deshbord/AddProducts";
import Allbuyers from "../Page/Deshbord/Admin/Allbuyers";
import Allseller from "../Page/Deshbord/Admin/Allseller";
import Deshbord from "../Page/Deshbord/Deshbord";
import Myorders from "../Page/Deshbord/Myorders";
import Errorpage from "../Errorpage";
import Home from "../Page/Home/Home";
import Products from "../Page/Home/Products";
import Main from "../Page/Layout/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: ([
            {
                path: '/',
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
                    const data = fetch(`http://localhost:5000/category/${params.name}`)
                    return data
                }
            }

        ])
    },
    {
        path: '/deshbord',
        element: <Deshbord></Deshbord>,
        children: ([
            {
                path: '/deshbord',
                element:<Myorders></Myorders>
            },
            {
                path: '/deshbord/addproducts',
                element:<AddProducts></AddProducts>
            },
            {
                path:'/deshbord/allseler',
                element:<Allseller></Allseller>
            },
            {
                path:'/deshbord/allbuyers',
                element:<Allbuyers></Allbuyers>
            },
        ])
    },
    {
        path:'*',
        element:<Errorpage></Errorpage>
    }
])