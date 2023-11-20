import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes.jsx'
import GlobalContextProvider from './contextProvider/GlobalContext'
import ThemeLayout from './themeProvider/theme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeLayout>
            <ToastContainer autoClose={2000} position='bottom-right' />
            <GlobalContextProvider>
                <RouterProvider router={router} />
            </GlobalContextProvider>
        </ThemeLayout>
    </React.StrictMode>
)
