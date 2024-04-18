import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function HorizontalChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
            datasets: [
                {
                   label: 'Data 1',
                   data: [154, 222, 195, 163, 286, 145, 310],
                   borderColor: 'rgb(53, 162, 235)',
                   backgroundColor: 'rgba(53, 162, 235, 0.4)' 
                },
                {
                    label: 'Data 2',
                    data: [134, 282, 195, 143, 286, 145, 310],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(15, 162, 235, 0.4)' 
                 },
                 {
                    label: 'Data 3',
                    data: [152, 222, 195, 163, 256, 145, 300],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(240, 162, 235, 0.4)' 
                 }
            ]
        })

        setChartOptions({
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: true,
            responsive: true
        })    
    }, [])

    return(
        <>
            <Bar data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
        </>
    )
}