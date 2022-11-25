import { createBrowserRouter } from "react-router-dom";
import Login from "../Page/Authentication/Login";
import PrivetRoute from "../Page/Authentication/PrivetRoute";
import Signup from "../Page/Authentication/Signup";
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
                path:'/categroy/:id',
                element:<PrivetRoute><Products></Products></PrivetRoute>,
                loader: ({params}) => {
                    const data = fetch(`http://localhost:5000/category/${params.id}`)
                    return data
                }
            }

        ])
    }
])