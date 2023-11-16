const ACCESS_TOKEN_KEY = '_access-token_'
const REFRESH_TOKEN_KEY = '_refresh-token_'

const getAccessToken = () => {
    try {
        const token = localStorage.getItem(ACCESS_TOKEN_KEY)
        return token || null
    } catch (error) {
        console.error('Error while getting access token:', error.message)
        return null
    }
}

const setAccessToken = (token) => {
    try {
        if (!token) {
            console.error('Error: Invalid access token provided.')
            return false
        }
        localStorage.setItem(ACCESS_TOKEN_KEY, token)

        return true
    } catch (error) {
        console.error('Error while setting access token:', error.message)
        return false
    }
}

const getRefreshToken = () => {
    try {
        const token = localStorage.getItem(REFRESH_TOKEN_KEY)
        return token || null
    } catch (error) {
        console.error('Error while getting refresh token:', error.message)
        return null
    }
}

const setRefreshToken = (token) => {
    try {
        if (!token) {
            console.error('Error: Invalid refresh token provided.')
            return false
        }
        localStorage.setItem(REFRESH_TOKEN_KEY, token)
        return true
    } catch (error) {
        console.error('Error while setting refresh token:', error.message)
        return false
    }
}

export { getAccessToken, setAccessToken, getRefreshToken, setRefreshToken }
