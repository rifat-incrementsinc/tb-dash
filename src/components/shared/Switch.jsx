import React from 'react'
import Switch from '@mui/material/Switch'

const PaySwitch = () => {
    const [checked, setChecked] = React.useState(true)

    const handleChange = (event) => {
        setChecked(event.target.checked)
    }
    return (
        <div>
            <Switch checked={checked} onChange={handleChange} />
        </div>
    )
}

export default PaySwitch
