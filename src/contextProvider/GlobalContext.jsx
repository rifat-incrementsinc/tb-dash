import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState('No User')
    const projectTheme = 'LightTheme'
    const value = {
        projectTheme,
        userInfo,
        setUserInfo,
    }
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider

GlobalContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
