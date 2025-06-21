import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";
import AuthGuard from "./AuthGuard";

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/homepage",
                element:<HomePage/>
            },
            {
                path:"/checkout",
                element:<AuthGuard><Checkout/></AuthGuard>
            },
        ]
    },
])