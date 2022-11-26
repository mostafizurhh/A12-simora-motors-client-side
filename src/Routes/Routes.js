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
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import DashBoard from "../layout/DashBoard/DashBoard";
import MyOrders from "../Pages/MyOrders/MyOrders";
import Payment from "../Pages/Payment/Payment";


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
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/booking/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])