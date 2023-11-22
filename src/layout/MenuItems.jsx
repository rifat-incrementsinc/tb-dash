import * as React from 'react'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined'
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined'
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined'
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
export const menuItems = [
    {
        path: '/admin/dashboard',
        label: 'Dashboard',
        icon: <DashboardOutlinedIcon />,
        url: 'dashboard',
    },
    {
        path: '/admin/users',
        label: 'Users',
        icon: <GroupsOutlinedIcon />,
        url: 'users',
    },
    {
        path: '/admin/tenders',
        label: 'Tenders',
        icon: <ArticleOutlinedIcon />,
        url: 'tenders',
    },
    {
        path: '/admin/ministry',
        label: 'Ministry/Office',
        icon: <CastForEducationOutlinedIcon />,
        url: 'ministry',
    },
    {
        path: '/admin/location',
        label: 'Location',
        icon: <MyLocationOutlinedIcon />,
        url: 'location',
    },
    {
        path: '/admin/subscription',
        label: 'Subscription',
        icon: <InventoryOutlinedIcon />,
        url: 'subscription',
    },
    {
        path: '/admin/payment',
        label: 'Payment',
        icon: <RequestQuoteOutlinedIcon />,
        url: 'payment',
    },
    {
        path: '/admin/Settings',
        label: 'Settings',
        icon: <SettingsOutlinedIcon />,
        url: 'Settings',
    },
]
