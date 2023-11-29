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
                fontWeight: 700,
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
                fontWeight: 400,
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
            signSuccess: {
                fontFamily: 'IBM Plex Sans',
                fontSize: 24,
                lineHeight: '32px',
                fontWeight: 700,
            },
            signSuccess2: {
                fontFamily: 'IBM Plex Sans',
                fontSize: 16,
                lineHeight: '24px',
                fontWeight: 400,
                color: '#696969',
            },
            termsandcondition: {
                fontFamily: 'IBM Plex Sans',
                fontSize: 14,
                lineHeight: '20px',
                fontWeight: 400,
                color: '#696969',
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
            progressRed: {
                main: '#B3261E',
            },
            progressGreen: {
                main: '#19764E',
            },
            progressPurple: {
                main: '#54008C',
            },
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
            MuiSelect: {
                styleOverrides: {
                    select: {
                        '&:hover': {
                            borderColor: 'red',
                        },
                        '&:before': {
                            borderColor: 'red',
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

                        // helper text background color
                        '&  .MuiFormHelperText-root.Mui-error': {
                            backgroundColor: '#fef9e4',
                            margin: 0,
                            paddingTop: 3,
                            paddingLeft: 3,
                        },
                        '& .MuiFormHelperText-root': {
                            backgroundColor: '#fef9e4',
                        },
                    },
                },
            },
            //  MUI button hover color
            MuiButton: {
                styleOverrides: {
                    root: {
                        boxShadow: 'none',
                        textTransform: 'none',
                        borderRadius: '100px',
                        fontSize: '16px',
                        // '& .MuiTouchRipple-root': {
                        //     display: 'none',
                        // },
                        '&:hover': {
                            backgroundColor: '#FFCD19',
                            boxShadow: 'none',
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
            // mui checkbox color change
            MuiCheckbox: {
                styleOverrides: {
                    root: {
                        color: '#000',
                        '&.Mui-checked': {
                            color: '#000',
                        },
                        '& .MuiSvgIcon-root': {
                            fontSize: '1.5rem',
                        },
                        '& .MuiTouchRipple-root': {
                            display: 'none',
                        },
                    },
                },
            },
            MuiPagination: {
                styleOverrides: {
                    root: {
                        // button hover color
                        '& .MuiPaginationItem-root:hover': {
                            backgroundColor: '#FFCD19',
                        },
                    },
                },
            },
            // MUI paper background color
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#FFFFFF',
                    },
                },
            },
            //      MuiLinearProgress height , width
            MuiLinearProgress: {
                styleOverrides: {
                    root: {
                        height: '10px',
                        width: '100%',
                        borderRadius: '10px',
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
