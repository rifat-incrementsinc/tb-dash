import React from 'react'
import ReactApexChart from 'react-apexcharts'
import data from './VisitorData.json'
const VisitorsChart = () => {
    const chartOptions = {
        chart: {
            height: 350,
            type: 'area',
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            type: 'category',
            categories: data.map((item) => item.day),
        },
        yaxis: {
            labels: {
                show: false, // Remove y-axis labels
            },
        },
        grid: {
            show: false,
        },
        tooltip: {
            x: {
                format: 'dd',
            },
        },
        legend: {
            horizontalAlign: 'right',
        },
        colors: ['#AF96CF', '#1DD01D'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.55,
                opacityTo: 0.2,
            },
        },
    }

    const chartSeries = [
        {
            name: 'Expected Visitors',
            data: data.map((item) => item.ev),
        },
        {
            name: 'Current Visitors',
            data: data.map((item) => item.cv),
        },
    ]

    return (
        <div id='chart'>
            <ReactApexChart
                options={chartOptions}
                series={chartSeries}
                type='area'
                height={350}
            />
        </div>
    )
}

const data1 = [
    {
        day: '0',
        ev: 2500,
        cv: 2400,
    },
    {
        day: '1',
        ev: 4000,
        cv: 2400,
    },
    {
        day: '2',
        ev: 3000,
        cv: 1400,
    },
    {
        day: '3',
        ev: 4500,
        cv: 900,
    },
    {
        day: '4',
        ev: 4200,
        cv: 4400,
    },
    {
        day: '5',
        ev: 4000,
        cv: 3400,
    },
    {
        day: '6',
        ev: 3000,
        cv: 800,
    },
    {
        day: '7',
        ev: 4000,
        cv: 2400,
    },
    {
        day: '8',
        ev: 3800,
        cv: 2900,
    },
]

export default VisitorsChart
