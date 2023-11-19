import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../components/Home'
import Test from '../components/test/Test.jsx'
import Login from '../components/pages/authPages/Login.jsx'
import Signup from '../components/pages/authPages/Signup.jsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: '/login',
        element: <Login />,
    },

    {
        path: '/test',
        element: <Test />,
    },
])
