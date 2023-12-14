//@ts-nocheck
import React from 'react'
import { Chart } from "react-google-charts";
import './style.css'

function PieChart({pieChartData}) {
    var options ={
        title: "Asset distribution",
        chartArea: {left:0, top: 5}
    }
  return (
    <Chart
        className='pie_chart'
        chartType="PieChart"
        data={pieChartData}
        options={options}
        width={"600px"}
        height={"550px"}
    />
  )
}

export default PieChart