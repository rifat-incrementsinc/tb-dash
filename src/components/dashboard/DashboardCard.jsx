import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Grid, LinearProgress } from '@mui/material'

const DashboardCard = ({
    title,
    icon,
    value,
    percentage,
    color,
    bgColor,
    progressColor,
}) => {
    return (
        <Grid
            item
            sm={12}
            lg={3.9}
            maxWidth={'460px'}
            sx={{
                backgroundColor: bgColor,
                padding: '24px',
                borderRadius: '15px',
                boxShadow: '0px 1px 3px 0px #1B171E1A',
            }}
        >
            <Stack
                direction={'row'}
                alignItems={'start'}
                justifyContent={'space-between'}
            >
                <Typography variant={'bodyLarge'} color={'textSecondary'}>
                    {title}
                </Typography>
                <img src={icon} alt='logo' width={'80px'} height={'80px'} />
            </Stack>
            <Stack
                direction={'row'}
                alignItems={'end'}
                justifyContent={'space-between'}
                mb={1}
            >
                <Typography variant={'displayMedium'} color={color}>
                    {value}
                </Typography>
                <Typography>{percentage}%</Typography>
            </Stack>
            <LinearProgress
                variant='determinate'
                value={percentage}
                color={progressColor}
            />
        </Grid>
    )
}

export default DashboardCard
