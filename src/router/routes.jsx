import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../components/Home'
import Test from '../components/test/Test.jsx'
import Login from '../components/pages/authPages/Login.jsx'
import Signup from '../components/pages/authPages/Signup.jsx'
import Users from '../components/Users.jsx'
import Tenders from '../components/Tenders.jsx'
import Ministry from '../components/Ministry.jsx'
import Location from '../components/Location.jsx'
import Subscription from '../components/Subscription.jsx'
import Payment from '../components/Payment.jsx'
import Settings from '../components/Settings.jsx'
import ErrorPage from '../components/ErrorPage.jsx'

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
