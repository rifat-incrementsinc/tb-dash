import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'

const ThemeLayout = ({ children }) => {
    const theme = createTheme({
        typography: {
            fontFamily: ['Poppins', 'sans-serif'].join(','),
            displayLarge: {
                fontSize: 57,
                lineHeight: '64px',
            },
            displayMedium: {
                fontSize: 45,
                lineHeight: '52px',
            },
            displaySmall: {
                fontSize: 36,
                lineHeight: '44px',
            },
            headlineLarge: {
                fontSize: 32,
                lineHeight: '40px',
            },
            headlineMedium: {
                fontSize: 28,
                lineHeight: '36px',
            },
            headlineSmall: {
                fontSize: 24,
                lineHeight: '32px',
            },
            titleLarge: {
                fontSize: 22,
                lineHeight: '28px',
            },
            titleMedium: {
                fontSize: 16,
                lineHeight: '24px',
            },
            titleSmall: {
                fontSize: 14,
                lineHeight: '20px',
            },
            labelLarge: {
                fontSize: 14,
                lineHeight: '20px',
            },
            labelMedium: {
                fontSize: 12,
                lineHeight: '16px',
            },
            labelSmall: {
                fontSize: 11,
                lineHeight: '16px',
            },
            bodyLarge: {
                fontSize: 16,
                lineHeight: '24px',
            },
            bodyMedium: {
                fontSize: 14,
                lineHeight: '20px',
            },
            bodySmall: {
                fontSize: 12,
                lineHeight: '16px',
            },
        },
        palette: {
            primary: {
                main: '#FFCD19',
                light: '#FFE999',
            },
            background: '#F9F9F9',
            textPrimary: '#202023',
            textSecondary: '#696969',
            positiveGreen: '#008419',
            error: {
                main: '#B3261E',
            },
            gold: '#745B00',
            positiveBg: '#DBFFDF',
            errorBg: '#FED8D8',
            goldBg: '#FBEBC3',
        },
        components: {
            // body font

            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        minHeight: '100vh',
                        textRendering: 'optimizeSpeed',
                        '& html:focus-within': {
                            scrollBehavior: 'smooth',
                        },
                        '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                            width: '10px',
                        },
                        '&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track':
                            {
                                background: '#e0e0e0',
                            },
                        '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb':
                            {
                                background: '#3D464D',
                                borderRadius: '4px',
                            },
                        '&::-webkit-scrollbar-track:hover, & *::-webkit-scrollbar-track:hover':
                            {
                                background: '#e0e0e0',
                            },
                        '&::-selection, & *::-selection': {
                            backgroundColor: 'gray',
                            color: 'white',
                        },
                    },
                },
            },
            MuiTableHead: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#FFE999',
                    },
                },
            },
            MuiTableRow: {
                styleOverrides: {
                    root: {
                        '&:nth-of-type(even)': {
                            backgroundColor: '#FAFAFA',
                        },
                    },
                },
            },
            // Mui table shadow
            MuiTable: {
                styleOverrides: {
                    root: {
                        boxShadow: '0 1 3 0 rgba(27, 23, 30, 0.1)',
                        borderRadius: '8px',
                        alignItems: 'center',
                    },
                },
            },
            // table content left align
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        textAlign: 'left',
                    },
                },
            },
        },
    })
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
export default ThemeLayout

ThemeLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
