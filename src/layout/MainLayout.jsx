import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ListItem from '@mui/material/ListItem'
import Stack from '@mui/material/Stack'
import { Link, Outlet, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { Avatar } from '@mui/material'
import { useEffect, useState } from 'react'
import { menuItems } from './MenuItems.jsx'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'
const drawerWidth = 240

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    })
)

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}))

export default function MainLayout() {
    const [open, setOpen] = React.useState(true)
    const [url, seturl] = useState('/')
    const location = useLocation()

    useEffect(() => {
        const url = location.pathname.split('/')[2]
        seturl(url)
    }, [location])
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position='fixed'
                open={open}
                sx={{
                    backgroundColor: '#fff',
                    boxShadow: '0px 4px 24px 0px #00000026',
                    height: '90px',
                }}
            >
                <Stack direction={'row'} alignItems='center' mt={3}>
                    <Stack
                        direction='row'
                        justifyContent='flex-start'
                        alignItems='center'
                        ml={3}
                    >
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            onClick={() => setOpen(!open)}
                            edge='start'
                            sx={{ display: { md: 'block', lg: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Stack>
                    <Stack
                        direction='row'
                        justifyContent='flex-end'
                        alignItems='center'
                        sx={{
                            flexGrow: 1,
                            mr: { xs: 0, sm: 3 },
                            display: { xs: 'none', sm: 'flex' },
                        }}
                        mr={3}
                        gap={1}
                    >
                        <Avatar
                            sx={{ width: 48, height: 48 }}
                            alt='Remy Sharp'
                            src='https://mui.com/static/images/avatar/1.jpg'
                        />
                        {/*<Typography variant='signSuccess2'>Admin</Typography>*/}
                    </Stack>
                </Stack>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#fff',
                        boxShadow: '8px 0px 32px 0px #00000026',
                    },
                }}
                variant='persistent'
                anchor='left'
                open={open}
            >
                <Stack p={2} sx={{ mb: 2 }}>
                    <img src={logo} alt='logo' />
                </Stack>
                <Stack
                    justifyContent={'space-between'}
                    direction={'column'}
                    sx={{ flexGrow: 1 }}
                >
                    <Stack>
                        <List>
                            {menuItems.map((item) => (
                                <ListItem
                                    key={item.path}
                                    sx={{
                                        mx: 1,
                                        width: '90%',
                                        backgroundColor:
                                            url === item.url
                                                ? 'textPrimary'
                                                : 'white',
                                        borderRadius: '10px',
                                        height: 48,
                                        // add transition
                                        transition:
                                            'background-color 0.3s ease',
                                    }}
                                >
                                    <Link
                                        to={item.path}
                                        style={{
                                            textDecoration: 'none',
                                            color: '#696969',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        {React.cloneElement(item.icon, {
                                            sx: {
                                                color:
                                                    url === item.url
                                                        ? '#FFCD19'
                                                        : 'primary',
                                                mr: 2,
                                            },
                                        })}
                                        <Typography
                                            variant='bodyLarge'
                                            component='div'
                                            sx={{
                                                color:
                                                    url === item.url
                                                        ? '#f9f9f9'
                                                        : '#696969',
                                            }}
                                        >
                                            {item.label}
                                        </Typography>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Stack>
                    <Stack>
                        <List>
                            <ListItem
                                sx={{
                                    mx: 1,
                                    width: '90%',
                                    borderRadius: '10px',
                                    height: 48,
                                }}
                            >
                                <Link
                                    to='/logout'
                                    style={{
                                        textDecoration: 'none',
                                        color: '#696969',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <ExitToAppOutlinedIcon
                                        sx={{ color: 'primary', mr: 2 }}
                                    />
                                    <Typography
                                        variant='bodyLarge'
                                        component='div'
                                        sx={{
                                            color: '#696969',
                                        }}
                                    >
                                        Logout
                                    </Typography>
                                </Link>
                            </ListItem>
                        </List>
                    </Stack>
                </Stack>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <div style={{ padding: '10px' }}>
                    <Outlet />
                </div>
            </Main>
        </Box>
    )
}
