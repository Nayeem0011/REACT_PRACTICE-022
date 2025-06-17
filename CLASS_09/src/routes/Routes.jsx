import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";
import ProductAll from "../component/products/ProductAll";
import ProductDetails from "../component/products/ProductDetails";
import Login from "../pages/Login";
import SingUp from "../pages/SingUp";

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<HomePage/>
            },
            {
                path:"/products",
                element:<ProductAll/>
            },
            {
                path:"/product/:id",
                element:<ProductDetails/>
            },
        ]
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/singup",
        element:<SingUp/>
    },
])