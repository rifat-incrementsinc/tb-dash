import { useContext, useEffect } from 'react'
import { GlobalContext } from '../contextProvider/GlobalContext.jsx'

const Home = () => {
    const { projectTheme, userInfo } = useContext(GlobalContext)
    const user = {
        name: 'Bhai',
        age: 33,
    }

    useEffect(() => {}, [])
    return (
        <>
            <p>This is the home {projectTheme}</p>
            <p>User info: {userInfo}</p>

            <p>{JSON.stringify(user, null, 10)}</p>
        </>
    )
}

export default Home
