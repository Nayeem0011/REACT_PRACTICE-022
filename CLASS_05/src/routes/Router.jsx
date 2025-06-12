
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import AdmissionForm from "../components/form/AdmissionForm";
import Posts from "../posts/Posts";
import PostsDetails from "../posts/PostsDetails";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/admission",
                element:<AdmissionForm/>
            },
            {
                path:"/post",
                element:<Posts/>
            },
            {
                path:"/post/:id",
                element:<PostsDetails/>
            }
        ]
    }
]);
