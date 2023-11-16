import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../components/Home'
import Test from '../components/test/Test.jsx'

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
        path:'/test',
        element: <Test/>
    }
])
