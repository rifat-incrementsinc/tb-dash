import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'

const ThemeLayout = ({ children }) => {
    const theme = createTheme({
        typography: {
            fontFamily: ['IBM Plex Sans', 'sans-serif'].join(','),
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
                fontWeight: 700,
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
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: 400,
            },
            bodyMedium: {
                fontSize: 14,
                lineHeight: '20px',
            },
            bodySmall: {
                fontSize: 12,
                lineHeight: '16px',
            },
            captionLarge: {
                fontFamily: 'IBM Plex Sans',
                fontSize: 32,
                lineHeight: '40px',
                fontWeight: 700,
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
            white: '#FFFFFF',
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
            // Mui textfield focus color change to black
            MuiTextField: {
                styleOverrides: {
                    root: {
                        backgroundColor: 'rgba(255,255,255,0.8)',
                        '& label': {
                            color: 'black',
                        },
                        '& label.Mui-focused': {
                            color: 'black',
                        },
                        '& .MuiInput-underline:after': {},
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#707070',
                                border: '0.3px solid #696969',
                            },
                            '&:hover fieldset': {
                                // borderColor: '#696969',
                                borderColor: 'inherit',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#707070',
                                border: '0.3px solid #696969',
                            },
                        },
                    },
                },
            },
            //  MUI button hover color
            MuiButton: {
                styleOverrides: {
                    root: {
                        '&:hover': {
                            backgroundColor: '#FFCD19',
                        },
                    },
                },
            },

            MuiRadio: {
                styleOverrides: {
                    root: {
                        color: '#FFCD19',
                        '&.Mui-checked': {
                            color: '#FFCD19',
                            borderColor: '#000',
                        },

                        // '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                        //     {
                        //         color: '#C5C5C5',
                        //     },
                        // '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                        //     color: '#FFCD19',
                        // },
                    },
                },
            },

            // Mui Switch color change, thumb and track change
            // MuiSwitch: {
            //     styleOverrides: {
            //         switchBase: {
            //             '&.Mui-checked': {
            //                 color: '#ff1990',
            //             },
            //         },
            //         thumb: {
            //             color: '#ff1990',
            //         },
            //         track: {
            //             color: '#ff1990',
            //         },
            //     },
            // },
            // MuiSwitch: {
            //     styleOverrides: {
            //         switchBase: {
            //             padding: 2,
            //             margin: 11,
            //
            //             transitionDuration: '300ms',
            //             '&.Mui-checked': {
            //                 transform: 'translateX(16px)',
            //                 color: '#FFCD19',
            //                 '& + .MuiSwitch-track': {
            //                     backgroundColor: '#000', // Use a fixed color value
            //                     opacity: 1,
            //                     border: 0,
            //                 },
            //                 '&.Mui-disabled + .MuiSwitch-track': {
            //                     color: '#FFCD19',
            //
            //                     opacity: 0.5,
            //                 },
            //             },
            //             // '&.Mui-focusVisible .MuiSwitch-thumb': {
            //             //     color: '#33cf4d',
            //             //     border: '6px solid #fff',
            //             // },
            //             '&.Mui-disabled .MuiSwitch-thumb': {
            //                 color: '#FFCD19',
            //             },
            //             '&.Mui-disabled + .MuiSwitch-track': {
            //                 color: '#FFCD19',
            //                 opacity: 0.7,
            //             },
            //         },
            //         thumb: {
            //             boxSizing: 'border-box',
            //             width: 17,
            //             height: 17,
            //             backgroundColor: '#FFCD19',
            //         },
            //         track: {
            //             boxSizing: 'border-box',
            //             width: 36,
            //             height: 20,
            //             borderRadius: 36 / 2,
            //             backgroundColor: '#C5C5C5', // Use a fixed color value
            //             opacity: 0.7,
            //         },
            //     },
            // },
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
            MuiPagination: {
                styleOverrides: {
                    root: {
                        // '& .MuiPaginationItem-root': {
                        //     color: '#000',
                        // },
                        //
                        // '& .MuiPaginationItem-root.Mui-selected': {
                        //     color: '#FFCD19',
                        // },
                        //
                        // '& .MuiPaginationItem-root.Mui-disabled': {
                        //     color: '#FFCD19',
                        // },
                        // button hover color
                        '& .MuiPaginationItem-root:hover': {
                            backgroundColor: '#FFCD19',
                        },
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
