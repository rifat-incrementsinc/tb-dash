import { useContext, useEffect } from 'react'
import { GlobalContext } from '../contextProvider/GlobalContext.jsx'
import DashboardCard from '../components/dashboard/DashboardCard.jsx'
import tenders from '../assets/proposal 1.png'
import Stack from '@mui/material/Stack'
import { Grid } from '@mui/material'
const CardData = [
    {
        title: 'Total Tenders/Proposals',
        icon: tenders,
        value: 1250,
        percentage: 74.5,
        color: 'progressRed.main',
        bgColor: '#F6EBE8',
        progressColor: 'progressRed',
    },
    {
        title: 'Total Users',
        icon: tenders,
        value: 12000,
        percentage: 2.5,
        color: 'progressPurple.main',
        bgColor: '#F3EAF9',
        progressColor: 'progressPurple',
    },
    {
        title: 'Total Revenue',
        icon: tenders,
        value: '$12000',
        percentage: 20.5,
        color: 'progressGreen.main',
        bgColor: '#EAF4F0',
        progressColor: 'progressGreen',
    },
]

const Home = () => {
    const { projectTheme, userInfo } = useContext(GlobalContext)
    const user = {
        name: 'Bhai',
        age: 33,
    }

    useEffect(() => {}, [])
    return (
        <div style={{ marginTop: '30px' }}>
            <Grid container>
                <Grid item xs={12} md={9}>
                    <Grid
                        container
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: 1,
                        }}
                    >
                        {CardData.map((item, index) => (
                            <DashboardCard key={index} {...item} />
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}></Grid>
            </Grid>
        </div>
    )
}

export default Home
