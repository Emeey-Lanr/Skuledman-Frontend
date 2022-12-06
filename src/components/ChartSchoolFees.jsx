import { Bar } from "react-chartjs-2"
import { Chart as ChartJs } from "chart.js/auto"

const ChartSchoolFees = ({ schoolFeesData }) => {
    return (
        <Bar data={schoolFeesData} />
    )
}

export default ChartSchoolFees