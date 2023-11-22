import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../components/pages/Home.jsx'
import Test from '../components/test/Test.jsx'
import Login from '../components/pages/authPages/Login.jsx'
import Signup from '../components/pages/authPages/Signup.jsx'
import Users from '../components/pages/Users.jsx'
import Tenders from '../components/pages/Tenders.jsx'
import Ministry from '../components/pages/Ministry.jsx'
import Location from '../components/pages/Location.jsx'
import Subscription from '../components/pages/Subscription.jsx'
import Payment from '../components/pages/Payment.jsx'
import Settings from '../components/pages/Settings.jsx'
import ErrorPage from '../components/pages/ErrorPage.jsx'

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
