import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../pages/Home.jsx'
import Test from '../components/test/Test.jsx'
import Login from '../pages/authPages/Login.jsx'
import Signup from '../pages/authPages/Signup.jsx'
import Users from '../pages/Users.jsx'
import Tenders from '../pages/Tenders.jsx'
import Ministry from '../pages/Ministry.jsx'
import Location from '../pages/Location.jsx'
import Subscription from '../pages/Subscription.jsx'
import Payment from '../pages/Payment.jsx'
import Settings from '../pages/Settings.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'

export const router = createBrowserRouter([
    {
        path: 'admin',
        element: <MainLayout />,

        children: [
            {
                path: 'dashboard',
                element: <Home />,
            },
            {
                path: 'users',
                element: <Users />,
            },
            {
                path: 'tenders',
                element: <Tenders />,
            },
            {
                path: 'ministry',
                element: <Ministry />,
            },
            {
                path: 'location',
                element: <Location />,
            },
            {
                path: 'subscription',
                element: <Subscription />,
            },
            {
                path: 'payment',
                element: <Payment />,
            },
            {
                path: 'Settings',
                element: <Settings />,
            },
        ],
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <Login />,
    },

    {
        path: '/test',
        element: <Test />,
    },
])
