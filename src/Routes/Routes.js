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
import MyOrders from "../layout/DashBoard/MyOrders";
import Payment from "../Pages/Payment/Payment";
import AllUsers from "../layout/DashBoard/AllUsers";
import AdminRoute from './AdminRoute';
import AllBuyers from '../layout/DashBoard/AllBuyers';
import AllSellers from '../layout/DashBoard/AllSellers';
import MyProducts from '../layout/DashBoard/MyProducts';
import SellerRoute from './SellerRoute';
import AddAProduct from '../layout/DashBoard/AddAProduct';
import MyBuyers from '../layout/DashBoard/MyBuyers';


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
                element: <PrivateRoute><OurCars></OurCars></PrivateRoute>
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
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/addAProduct',
                element: <SellerRoute><AddAProduct></AddAProduct></SellerRoute>
            },
            {
                path: '/dashboard/myBuyers',
                element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])