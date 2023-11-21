import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../components/Home'
import Test from '../components/test/Test.jsx'
import Login from '../components/pages/authPages/Login.jsx'
import Signup from '../components/pages/authPages/Signup.jsx'
import Users from '../components/Users.jsx'

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
        ],
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: '/',
        element: <Login />,
    },

    {
        path: '/test',
        element: <Test />,
    },
])
