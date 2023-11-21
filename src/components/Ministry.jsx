import React from 'react'
import { Link } from 'react-router-dom'

const Ministry = () => {
    return (
        <div>
            <p>This is the home </p>
            <p>User info: </p>
            <Link to='/admin/Settings'>Settings</Link>
        </div>
    )
}

export default Ministry
