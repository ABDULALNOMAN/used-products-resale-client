import { createBrowserRouter } from "react-router-dom";
import Login from "../Page/Authentication/Login";
import Signup from "../Page/Authentication/Signup";
import Home from "../Page/Home/Home";
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
        ])
    }
])