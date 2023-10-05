import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "./piechart.css"
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Online', 'Cash', 'Cheque'],
  datasets: [
    {
      label: ' ',
      data: [63, 25, 11],
      backgroundColor: [
        '#4318FF',
        '#6AD2FF',
        '#EFF4FB',
        
      ],
     
     
    },
  ],
};
const options = {
    radius: '50%', 
    cutoutPercentage: 10,
    plugins: {
        legend: {
          display: false,
        },
      },
     
  };

export default function App() {
  return <Pie data={data}  options={options} className="p-chart"/>;
}

