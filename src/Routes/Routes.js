import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Blog from "../Pages/Blog/Blog";
import CategoryDetails from "../Pages/AllCategoryData/CategoryDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import OurCars from "../Pages/OurCars/OurCars";
import Register from "../Pages/Register/Register";
import TheBrand from "../Pages/TheBrand/TheBrand";
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/ourcars',
                element: <OurCars></OurCars>
            },
            {
                path: '/thebrand',
                element: <TheBrand></TheBrand>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/allcategories/:id',
                element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allcategories/${params.id}`)
            }
        ]
    }
])