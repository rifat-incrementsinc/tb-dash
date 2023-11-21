import React from 'react'
import { Link } from 'react-router-dom'

const Payment = () => {
    return (
        <div>
            <p>This is the home </p>
            <p>User info: </p>
            <Link to='/admin/dashboard'>Dashboard</Link>
        </div>
    )
}

export default Payment
