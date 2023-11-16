import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes.jsx'
import GlobalContextProvider from './contextProvider/GlobalContext'
import ThemeLayout from './themeProvider/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeLayout>
            <GlobalContextProvider>
                <RouterProvider router={router} />
            </GlobalContextProvider>
        </ThemeLayout>
    </React.StrictMode>
)
